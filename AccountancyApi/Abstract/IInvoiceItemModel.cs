using AccountancyApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.Abstract
{
    public interface IInvoiceItemModel
    {
        bool Add(InvoiceItemEntity invoiceIte);

        bool Update(InvoiceItemEntity invoiceItems);

        bool Delete(InvoiceItemEntity invoiceItem);

        bool Exist(InvoiceItemEntity invoiceItem);
    }
}
