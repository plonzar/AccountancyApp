using AccountancyApi.Abstract;
using AccountancyApi.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;

namespace AccountancyApi.Migrations
{
    public class ApplicationSeeder
    {
        private ApplicationDbContext ctx;
        private IHostingEnvironment hosting;
        private readonly UserManager<UserEntity> manager;
        private ICustomerModel customerModel;

        public ApplicationSeeder(ApplicationDbContext ctx, IHostingEnvironment hosting, UserManager<UserEntity> manager, ICustomerModel customerModel)
        {
            this.ctx = ctx;
            this.hosting = hosting;
            this.manager = manager;
            this.customerModel = customerModel;
        }

        public async Task Seed()
        {
            ctx.Database.EnsureCreated();

            var user = await manager.FindByEmailAsync("testowy@wp.pl");

            if (user == null)
            {
                user = new UserEntity()
                {
                    Name = "Testowy",
                    Address = "Klasztorna 3a",
                    City = "Hanoi",
                    PostCode = "32-440",
                    Nip = "1234567890",
                    Email = "testowy@wp.pl",
                    UserName = "testowy@wp.pl",
                };

                var result = await manager.CreateAsync(user, "testowy1");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Error during user create");
                }
            }

            //user = await manager.FindByEmailAsync("testowy@wp.pl");
            //var userId = user.Id;

            //var customer1 = new CustomerEntity()
            //{
            //    Name = "Tomasz Płonka",
            //    Address = "Kościuszki 66",
            //    City = "Kęty",
            //    PostCode = "32-650",
            //    NIP = "5492363715",
            //    User = user,
            //    Email = "tomek@abcbiuro.com.pl"
            //};

            //var customer2 = new CustomerEntity()
            //{
            //    Name = "Abc Biuro",
            //    Address = "Klasztorna 3a",
            //    City = "Kęty",
            //    PostCode = "32-650",
            //    NIP = "5490009576",
            //    User = user,
            //    Email = "sklep@abcbiuro.com.pl"
            //};

            //var customer3 = new CustomerEntity()
            //{
            //    Name = "FIRMA HANDLOWO USŁUGOWA ROBOT",
            //    Address = "Kościuszki 19a",
            //    City = "Kęty",
            //    PostCode = "32-650",
            //    NIP = "5490018552",
            //    User = user
            //};


            //if (await customerModel.Add(customer1, userId) && await customerModel.Add(customer2, userId) && await customerModel.Add(customer3, userId))
            //{
            //    try
            //    {
            //        customerModel.SaveChanges();
            //    }
            //    catch (Exception)
            //    {

            //        throw;
            //    }
            //}

        }
}
}
