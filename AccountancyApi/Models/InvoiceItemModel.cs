using AccountancyApi.Abstract;
using AccountancyApi.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.Models
{
    public class InvoiceItemModel : IInvoiceItemModel
    {
        private ApplicationDbContext context;

        public InvoiceItemModel(ApplicationDbContext context)
        {
            this.context = context;
        }

        public bool Add(InvoiceItemEntity invoiceItem)
        {
            if (invoiceItem != null)
            {
                if (!Exist(invoiceItem))
                {
                    try
                    {

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
                    return Update(invoiceItem);
                }
            }
            else
            {
                return false;
            }          
        }

        public bool Update(InvoiceItemEntity invoiceItem)
        {
            if (Exist(invoiceItem))
            {
                var currentItem = context.InvoiceItemEntities
                    .Where(i => i.Id == invoiceItem.Id)
                    .SingleOrDefault();
                try
                {
                    currentItem.Name = invoiceItem.Name;
                    currentItem.Tax = invoiceItem.Tax;
                    currentItem.TotalPriceWithoutTax = invoiceItem.TotalPriceWithoutTax;
                    currentItem.TotalPriceWithTax = invoiceItem.TotalPriceWithTax;
                    currentItem.UnitPriceWithoutTax = invoiceItem.UnitPriceWithoutTax;
                    currentItem.Amount = invoiceItem.Amount;
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
                return Add(invoiceItem);
            }
        }

        public bool Delete(InvoiceItemEntity invoiceItem)
        {
            if (Exist(invoiceItem))
            {
                try
                {
                    context.InvoiceItemEntities.Remove(invoiceItem);
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

        public bool Exist(InvoiceItemEntity invoiceItem)
        {
            if (context.InvoiceItemEntities.FirstOrDefault(i => i.Id == invoiceItem.Id) != null)
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
