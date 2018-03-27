using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.Entities
{
    public class InvoiceEntity
    {
        public int Id { get; set; }

        public CustomerEntity Customer { get; set; }

        public List<InvoiceItemEntity> InvoiceItems { get; set; }

        public int InvoiceNumber { get; set; }

        public decimal ItemsPriceTotal { get; set; }

        public string PaymentType { get; set; }

        public DateTime InvoiceDate { get; set; }

        public DateTime PaymentDate { get; set; }

        public UserEntity User { get; set; }

        public bool Accounted { get; set; }
    }
}
