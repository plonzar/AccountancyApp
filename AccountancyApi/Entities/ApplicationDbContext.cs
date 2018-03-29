using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AccountancyApi.Entities
{
    public class ApplicationDbContext : IdentityDbContext<UserEntity>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
        }
        public DbSet<CustomerEntity> CustomerEntities { get; set; }
        public DbSet<InvoiceEntity> InvoiceEntities { get; set; }
        public DbSet<InvoiceItemEntity> InvoiceItemEntities { get; set; }
        public DbSet<EmailConfiguration> EmailsConfigurations { get; set; }
    }
}
