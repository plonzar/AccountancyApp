using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.Entities
{
    public class EmailConfiguration
    {
        public int Id { get; set; }
        public UserEntity User { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool SslEnabled { get; set; }
    }
}
