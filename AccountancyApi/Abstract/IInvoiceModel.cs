using AccountancyApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.Abstract
{
    public interface IInvoiceModel
    {
        InvoiceEntity GetByInvoiceNumber(int invoiceNumber, string userId);

        List<InvoiceEntity> GetAll(string userId);

        Task<bool> Add(InvoiceEntity invoice, string userId);

        Task<bool> Update(InvoiceEntity invoice, string userId);

        bool Delete(int id);

        Task<bool> IsLast(int invoiceId, string userId);

        Task<InvoiceEntity> GetLast(string userId);

        bool SetttleInvoices(int[] setteledInvoices, string userId);

        void SaveChanges();
    }
}
