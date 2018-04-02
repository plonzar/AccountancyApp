using AccountancyApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.DefaultSettings
{
    public static class DefaultEmailConfig
    {
        public static string Host = "";
        public static int Port = 587;
        public static string Username = "";
        public static string Password = "";
        public static bool SslEnabled = true;
    }
}
