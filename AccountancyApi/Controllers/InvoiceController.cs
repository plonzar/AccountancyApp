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
    [Route("api/Invoice/[action]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class InvoiceController : Controller
    {
        private IInvoiceModel invoiceModel;
        private IMapper mapper;
        private UserManager<UserEntity> manager;

        public InvoiceController(IInvoiceModel invoiceModel, IMapper mapper, UserManager<UserEntity> manager)
        {
            this.invoiceModel = invoiceModel;
            this.mapper = mapper;
            this.manager = manager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            //hard coded id for test
            var user = await manager.FindByNameAsync(User.Identity.Name);
            var userId = user.Id;

            try
            {
                var invoices = invoiceModel.GetAll(userId);
                if (invoices != null)
                {
                    return await Task.FromResult(Ok(mapper.Map<IEnumerable<InvoiceEntity>, IEnumerable<InvoiceViewModel>>(invoices)));
                }
                else
                {
                    return await Task.FromResult(Ok());
                }
            }
            catch (Exception error)
            {
                Console.WriteLine(error.Message);
                return await Task.FromResult(BadRequest("Operation Error"));
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetByNumber(int invoiceNumber)
        {
            //hard coded id for test
            var user = await manager.FindByNameAsync(User.Identity.Name);
            var userId = user.Id;

            try
            {
                var invoice = invoiceModel.GetByInvoiceNumber(invoiceNumber, userId);
                if (invoice != null)
                {
                    return await Task.FromResult(Ok(mapper.Map<InvoiceEntity, InvoiceViewModel>(invoice)));
                }
                else
                {
                    return await Task.FromResult(BadRequest("Invoice not found"));
                }
            }
            catch (Exception error)
            {
                Console.WriteLine(error.Message);
                return await Task.FromResult(BadRequest("Operation Error"));
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] InvoiceViewModel invoice)
        {
            //hard coded id for test
            var user = await manager.FindByNameAsync(User.Identity.Name);
            var userId = user.Id;

            if (ModelState.IsValid)
            {
                try
                {
                    if (!await invoiceModel.Add(mapper.Map<InvoiceViewModel, InvoiceEntity>(invoice), userId))
                    {
                            return await Task.FromResult(BadRequest("Operation error"));
                    }
                }
                catch (Exception error)
                {
                    Console.WriteLine(error.InnerException);
                    return await Task.FromResult(BadRequest("Operation error"));
                }
               
                try
                {
                    invoiceModel.SaveChanges();
                    return await Task.FromResult(Ok(mapper.Map<InvoiceEntity, InvoiceViewModel>(await invoiceModel.GetLast(userId))));
                }
                catch (Exception error)
                {
                    Console.WriteLine(error.InnerException);
                    return await Task.FromResult(BadRequest("Operation error"));
                }
            }
            else
            {
                return await Task.FromResult(BadRequest("Model is invalid"));
            }           
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] InvoiceViewModel invoice)
        {
            
            var user = await manager.FindByNameAsync(User.Identity.Name);
            var userId = user.Id;

            if (ModelState.IsValid)
            {
                try
                {
                    if (!await invoiceModel.Update(mapper.Map<InvoiceViewModel, InvoiceEntity>(invoice), userId))
                    {
                        return await Task.FromResult(BadRequest("Operation error"));
                    }
                }
                catch (Exception)
                {
                    return await Task.FromResult(BadRequest("Operation error"));
                }

                try
                {
                    invoiceModel.SaveChanges();
                    var returnInvoice = invoiceModel.GetByInvoiceNumber(invoice.InvoiceNumber, userId);
                    return await Task.FromResult(Ok(mapper.Map<InvoiceEntity, InvoiceViewModel>(returnInvoice)));
                }
                catch (Exception)
                {
                    return await Task.FromResult(BadRequest("Operation error"));
                }
            }
            else
            {
                return await Task.FromResult(BadRequest("Model is invalid"));
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            
            var user = await manager.FindByNameAsync(User.Identity.Name);
            var userId = user.Id;

            try
            {
                if (await invoiceModel.IsLast(id, userId))
                {
                    if (invoiceModel.Delete(id))
                    {
                        invoiceModel.SaveChanges();
                        return await Task.FromResult(Ok());
                    }
                    else
                    {
                        return await Task.FromResult(BadRequest("Operation error"));
                    }
                }
                else
                {
                    return await Task.FromResult(Ok("Invoice is not last"));
                }
            }
            catch (Exception)
            {
                return await Task.FromResult(BadRequest("Operation error"));
            }
        }

        [HttpPost]
        public async Task<IActionResult> SettleInvoices([FromBody] int[] settledInvoices)
        {
            if (settledInvoices.Length != 0)
            {
                var user = await manager.FindByNameAsync(User.Identity.Name);
                if (user != null)
                {
                    var userId = user.Id;

                    if (invoiceModel.SetttleInvoices(settledInvoices, userId))
                    {
                        invoiceModel.SaveChanges();
                        return Ok();
                    }
                    return BadRequest("Invoice not found");
                }
                return BadRequest("Invalid user");
            }
            return BadRequest("Invalid data");
        }
    }
}
