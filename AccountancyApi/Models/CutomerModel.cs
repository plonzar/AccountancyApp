using AccountancyApi.Abstract;
using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.Models
{
    public class CustomerModel : ICustomerModel
    {
        private ApplicationDbContext contex;
        private IUserModel userModel;
        private UserManager<UserEntity> userManager;

        public CustomerModel(ApplicationDbContext appContext, IUserModel userModel, UserManager<UserEntity> userManager)
        {
            this.contex = appContext;
            this.userModel = userModel;
            this.userManager = userManager;
        }

        public CustomerEntity GetByNip(string nip, string userId)
        {
            var customer = contex.CustomerEntities
                .Where(u => u.User.Id == userId && u.NIP == nip)
                .SingleOrDefault();
            if (customer != null)
            {
                return customer;
            }
            else
            {
                return null;
            }
        }

        public IEnumerable<CustomerEntity> GetAll(string userId)
        {
            var customers = contex.CustomerEntities
               .Where(u => u.User.Id == userId)
               .ToList();
            if (customers.Count != 0)
            {
                return customers;
            }
            else
            {
                return null;
            }
        }

        public async Task<bool> Add(CustomerEntity customer, string userId)
        {
            if (customer != null && CustomerisValid(customer))
            {
                var user = await userManager.FindByIdAsync(userId);

                customer.User = user;
                if (!await CustomerExist(customer, userId))
                {
                    try
                    {
                        contex.CustomerEntities.Add(customer);
                        return true;
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e.Message);
                        return false;
                    }
                }
                else
                {
                    return await Update(customer, userId);
                }
            }
            return false;
        }

        public async Task<bool> Update(CustomerEntity customer, string userId)
        {
            if (await CustomerExist(customer, userId))
            {
                try
                {
                    var currentCustomer = contex.CustomerEntities.FirstOrDefault(c => c.NIP == customer.NIP);
                    SetValues(ref currentCustomer, customer);
                    return true;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                    return false;
                }
            }
            else
            {
                if (await Add(customer, userId))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public void SaveChanges()
        {
            contex.SaveChanges();
        }

        public async Task<bool> CustomerExist(CustomerEntity customer, string userId)
        {
            var user = await userManager.FindByIdAsync(userId);

            var foundCustomer = contex.CustomerEntities
                .Where(c => c.User == user)
                .FirstOrDefault(c => c.NIP == customer.NIP);

            if (foundCustomer == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        private static bool CustomerisValid(CustomerEntity customer)
        {
            if (customer.Name != "" && customer.NIP != "" && customer.PostCode != "" && customer.Address != "" && customer.City != "")
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private void SetValues(ref CustomerEntity currentCustomer, CustomerEntity newValues)
        {
            currentCustomer.Address = newValues.Address;
            currentCustomer.City = newValues.City;
            currentCustomer.Email = newValues.Email;
            currentCustomer.Name = newValues.Name;
            currentCustomer.NIP = newValues.NIP;
            currentCustomer.PostCode = newValues.PostCode;
        }

    }
}
