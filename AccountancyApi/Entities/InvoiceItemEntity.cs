using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.Entities
{
    public class InvoiceItemEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Amount { get; set; }
        public decimal UnitPriceWithoutTax { get; set; }
        public decimal TotalPriceWithoutTax { get; set; }
        public int Tax { get; set; }
        public decimal TotalPriceWithTax { get; set; }
        public int InvoiceEntityId { get; set; }
    }
}
