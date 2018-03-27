using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AccountancyApi.Abstract
{
    public interface ICustomerModel
    {
        CustomerEntity GetByNip(string nip, string userId);

        IEnumerable<CustomerEntity> GetAll(string userId);

        Task<bool> Add(CustomerEntity customer, string userId);

        Task<bool> Update(CustomerEntity customer, string userId);

        Task<bool> CustomerExist(CustomerEntity customer, string userId);

        void SaveChanges();
    }
}
