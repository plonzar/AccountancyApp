using AccountancyApi.Abstract;
using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AccountancyApi.Controllers
{
    [Route("api/customer/[action]")]
    [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
    public class CustomerController : Controller
    {
        private ICustomerModel customerModel;
        private IUserModel userModel;
        private IMapper mapper;
        private UserManager<UserEntity> manager;

        public CustomerController(ICustomerModel customerModel, IUserModel userModel, IMapper mapper, UserManager<UserEntity> manager)
        {
            this.customerModel = customerModel;
            this.userModel = userModel;
            this.mapper = mapper;
            this.manager = manager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            
            var user = await manager.FindByNameAsync(User.Identity.Name);
            var userId = user.Id;

            var customers = customerModel.GetAll(userId);

            if (customers != null)
            {
                try
                {
                    return await Task.FromResult(Ok(mapper.Map<IEnumerable<CustomerEntity>, IEnumerable<CustomerViewModel>>(customers)));
                }
                catch (Exception)
                {
                    return await Task.FromResult(NotFound());
                }
            }
            else
            {
                return await Task.FromResult(NotFound());
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetByNip(string nip)
        {

            
            var user = await manager.FindByNameAsync(User.Identity.Name);
            var userId = user.Id;

            var customer = customerModel.GetByNip(nip, userId);

            if (customer != null)
            {
                try
                {
                    return await Task.FromResult(Ok(mapper.Map<CustomerEntity, CustomerViewModel>(customer)));
                }
                catch (Exception)
                {

                    return await Task.FromResult(NotFound("customer not found"));
                }
            }
            else
            {
                return await Task.FromResult(NotFound("customer not found"));
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody]CustomerViewModel customer)
        {
            
            var user = await manager.FindByNameAsync(User.Identity.Name);
            var userId = user.Id;

            if (ModelState.IsValid)
            {
                try
                {
                    if (await customerModel.Add(mapper.Map<CustomerViewModel, CustomerEntity>(customer), userId))
                    {
                        customerModel.SaveChanges();
                        var callbackCustomer = customerModel.GetByNip(customer.NIP, userId);
                        return await Task.FromResult(Ok(mapper.Map<CustomerEntity,CustomerViewModel>(callbackCustomer)));
                    }
                    else
                    {
                        return await Task.FromResult(BadRequest("Add Operation Error"));
                    }
                }
                catch (Exception error)
                {
                    Console.WriteLine(error.Message);
                    return await Task.FromResult(BadRequest("Add Operation Error"));
                }
            }
            else
            {
                return await Task.FromResult(BadRequest("Data format error"));
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody]CustomerViewModel customer)
        {
            
            var user = await manager.FindByNameAsync(User.Identity.Name);
            var userId = user.Id;

            if (ModelState.IsValid)
            {
                try
                {
                    if (await customerModel.Update(mapper.Map<CustomerViewModel, CustomerEntity>(customer), userId))
                    {
                        customerModel.SaveChanges();
                        var callbackCustomer = customerModel.GetByNip(customer.NIP, userId);
                        return await Task.FromResult(Ok(mapper.Map<CustomerEntity, CustomerViewModel>(callbackCustomer)));
                    }
                    else
                    {
                        return await Task.FromResult(BadRequest("Update Operation Error"));
                    }
                }
                catch (Exception error)
                {
                    Console.WriteLine(error.Message);
                    return await Task.FromResult(BadRequest("Update Operation Error"));
                }
            }
            return await Task.FromResult(NotFound("Customer not found"));
        }

        [HttpPost]
        public async Task<IActionResult> Exist([FromBody]CustomerViewModel customer)
        {
            
            var user = await manager.FindByNameAsync(User.Identity.Name);
            var userId = user.Id;

            try
            {
                if (await customerModel.CustomerExist(mapper.Map<CustomerViewModel, CustomerEntity>(customer), userId))
                {
                    return await Task.FromResult(Ok(true));
                }
                else
                {
                    return await Task.FromResult(Ok(false));
                }
            }
            catch (Exception)
            {
                return await Task.FromResult(BadRequest("Operation Error"));
            }
        }
    }
}
