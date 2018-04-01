using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        [RegularExpression("[0-9]{2}-[0-9]{3}")]
        public string PostCode { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        [RegularExpression("[0-9]{10}")]
        public string Nip { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string SpecialKey { get; set; }
    }
}
