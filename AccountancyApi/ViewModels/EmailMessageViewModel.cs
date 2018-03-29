using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.ViewModels
{
    public class EmailMessageViewModel
    {
        [Required]
        public string MessageBody { get; set; }

        [Required]
        public string Subject { get; set; }

        [Required]
        public string Receiver { get; set; }
    }
}
