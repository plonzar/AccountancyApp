using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.ViewModels
{
    public class EmailConfigurationViewModel
    {   
        [Required]
        public string Host { get; set; }

        public int Port { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public bool SslEnabled { get; set; }
    }
}
