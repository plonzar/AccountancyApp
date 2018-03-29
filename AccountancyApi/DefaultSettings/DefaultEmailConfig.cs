using AccountancyApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.DefaultSettings
{
    public class DefaultEmailConfig
    {
        public string Host = "";
        public int Port = 0;
        public string Username = "";
        public string Password = "";
        public bool SslEnabled = true;
    }
}
