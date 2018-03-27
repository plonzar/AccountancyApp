using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.ViewModels
{
    public class InvoiceViewModel
    {
        public int Id { get; set; }

        [Required]
        public CustomerViewModel Customer { get; set; }

        [Required]
        public List<InvoiceItemViewModel> InvoiceItems { get; set; }

        [Required]
        public int InvoiceNumber { get; set; }

        [Required]
        public decimal ItemsPriceTotal { get; set; }

        [Required]
        public string PaymentType { get; set; }

        [Required]
        public DateTime InvoiceDate { get; set; }

        [Required]
        public DateTime PaymentDate { get; set; }

        [Required]
        public bool Accounted { get; set; }
    }
}
