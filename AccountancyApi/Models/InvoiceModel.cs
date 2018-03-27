using AccountancyApi.Abstract;
using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.Models
{
    public class InvoiceModel : IInvoiceModel
    {
        private ApplicationDbContext context;
        private UserManager<UserEntity> userManager;
        private ICustomerModel customerModel;
        private IUserModel userModel;
        private IInvoiceItemModel invoiceItemModel;

        public InvoiceModel(ApplicationDbContext appContext, ICustomerModel customerModel, IUserModel userModel, IInvoiceItemModel invoiceItemModel, UserManager<UserEntity> userManager)
        {
            this.context = appContext;
            this.customerModel = customerModel;
            this.userModel = userModel;
            this.invoiceItemModel = invoiceItemModel;
            this.userManager = userManager;
        }

        public InvoiceEntity GetByInvoiceNumber(int invoiceNumber, string userId)
        {
            var invoice = context.InvoiceEntities
                .Where(i => i.User.Id == userId && i.InvoiceNumber == invoiceNumber)
                .Include(i => i.Customer)
                .Include(i => i.InvoiceItems)
                .SingleOrDefault();

            if (invoice != null)
            {
                return invoice;
            }
            else
            {
                return null;
            }
        }

        public List<InvoiceEntity> GetAll(string userId)
        {
            var invoices = context.InvoiceEntities
                .Where(i => i.User.Id == userId)
                .Include(i => i.Customer)
                .Include(i => i.InvoiceItems)
                .ToList();

            if (invoices.Count != 0)
            {
                return invoices;
            }
            else
            {
                return null;
            }
           
        }

        public async Task<bool> Add(InvoiceEntity invoice, string userId)
        {
            if (invoice != null)
            {
                var user = await userManager.FindByIdAsync(userId);
                invoice.User = user;

                try
                {
                    await customerModel.Update(invoice.Customer, userId);
                    var customer = customerModel.GetByNip(invoice.Customer.NIP, userId);

                    if (customer != null)
                    {
                        invoice.Customer = customer;
                    }

                    int invoiceNumber;

                    try
                    {
                        var lastInvoice = context.InvoiceEntities
                            .Where(i => i.User == user)
                            .OrderByDescending(i => i.InvoiceNumber)
                            .First();

                        invoiceNumber = lastInvoice.InvoiceNumber + 1;

                    }
                    catch (Exception)
                    {
                        invoiceNumber = 1;
                    }
                   
                    invoice.InvoiceNumber = invoiceNumber;

                    context.Add(invoice);
                    return true;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        public async Task<bool> Update(InvoiceEntity invoice, string userId)
        {
            if (InvoiceExist(invoice))
            {
                var invoiceToUpdate = context.InvoiceEntities.SingleOrDefault(i => i.Id == invoice.Id);

                //1)update customer
                try
                {
                    if (await customerModel.Update(invoice.Customer, userId))
                    {
                        var newCustomer = customerModel.GetByNip(invoice.Customer.NIP, userId);
                        invoiceToUpdate.Customer = newCustomer;
                        //2)update invoiceItems

                        var result = false;

                        if (SolveWhichItemsLeft(invoice))
                        {
                            foreach (var item in invoice.InvoiceItems)
                            {
                                if (invoiceItemModel.Exist(item))
                                {
                                    result = invoiceItemModel.Update(item);
                                }
                                else
                                {
                                    invoiceToUpdate.InvoiceItems.Add(item);
                                }

                                if (!result)
                                {
                                    break;
                                }
                            }
                        }

                        //3)update rest of invoice properties
                        if (result)
                        {
                            invoiceToUpdate.InvoiceDate = invoice.InvoiceDate;
                            invoiceToUpdate.InvoiceNumber = invoice.InvoiceNumber;
                            invoiceToUpdate.ItemsPriceTotal = invoice.ItemsPriceTotal;
                            invoiceToUpdate.PaymentDate = invoice.PaymentDate;
                            invoiceToUpdate.PaymentType = invoice.PaymentType;

                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                    else
                    {
                        return false;
                    }
                }
                catch (Exception error)
                {
                    Console.WriteLine(error.Message);
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            var invoiceToDelete = context.InvoiceEntities
                       .Include(i => i.InvoiceItems)
                       .SingleOrDefault(i => i.Id == id);

            if (InvoiceExist(invoiceToDelete))
            {
                try
                {
                    context.Remove(invoiceToDelete);
                    return true;
                }
                catch (Exception error)
                {
                    Console.WriteLine(error.Message);
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }

        public async Task<bool> IsLast(int invoiceId, string userId)
        {
            var user = await userManager.FindByIdAsync(userId);

            var currentInvoice = context.InvoiceEntities
                       .SingleOrDefault(i => i.Id == invoiceId);

            var laterInvoice = context.InvoiceEntities
                .Where(i => i.User == user && i.InvoiceNumber > currentInvoice.InvoiceNumber)
                .FirstOrDefault();

            if (laterInvoice != null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public async Task<InvoiceEntity> GetLast(string userId)
        {
            var user = await userManager.FindByIdAsync(userId);
            var lastInvoice = context.InvoiceEntities
                .Where(i => i.User == user)
                .Include(i => i.Customer)
                .Include(i => i.InvoiceItems)
                .Last();

            return lastInvoice;
        }

        public bool SetttleInvoices(int[] setteledInvoices, string userId)
        {
            bool result = false;

            foreach (var number in setteledInvoices)
            {
                var invoice = context.InvoiceEntities.Where(i => i.InvoiceNumber == number && i.User.Id == userId).FirstOrDefault();
                if (invoice != null)
                {
                    invoice.Accounted = true;
                    result = true;
                }
                else
                {
                    result = false;
                    break;
                }
            }
            return result;
        }
        //private
        private bool SolveWhichItemsLeft(InvoiceEntity invoice)
        {
            var currentInvoice = context.InvoiceEntities
                .Where(i => i.Id == invoice.Id)
                .Include(i => i.InvoiceItems)
                .SingleOrDefault();

            if (currentInvoice != null)
            {
                foreach (var currentItem in currentInvoice.InvoiceItems)
                {
                    var found = false;
                    foreach (var newItem in invoice.InvoiceItems)
                    {
                        if (currentItem.Id == newItem.Id)
                        {
                            found = true;
                            break;
                        }
                    }
                    if (!found)
                    {
                        try
                        {
                            context.InvoiceItemEntities.Remove(currentItem);
                            found = false;
                        }
                        catch (Exception error)
                        {
                            Console.WriteLine(error);
                            return false;
                        }
                    }
                }
                return true;
            }
            else
            {
                return false;
            }
        }

        private bool InvoiceExist(InvoiceEntity invoice)
        {
            var foundInvoice = context.InvoiceEntities
                .Where(i => i.Id == invoice.Id)
                .FirstOrDefault();
            

            if (foundInvoice != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
