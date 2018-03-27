using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.ViewModels
{
    public class InvoiceItemViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Amount { get; set; }

        [Required]
        public decimal UnitPriceWithoutTax { get; set; }

        [Required]
        public decimal TotalPriceWithoutTax { get; set; }

        [Required]
        public int Tax { get; set; }

        [Required]
        public decimal TotalPriceWithTax { get; set; }
    }
}
