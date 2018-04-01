using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.DefaultSettings
{
    public class CommonUsedEmailProviders
    {
        public static Dictionary<string, string> Gmail = new Dictionary<string, string>()
        {
            {"Host","smtp.gmail.com"},
            {"Port","587"},
        };

        public static Dictionary<string, string> Yahoo = new Dictionary<string, string>()
        {
            {"Host","smtp.mail.yahoo.com"},
            {"Port","587"},
        };

        public static Dictionary<string, string> Outlook = new Dictionary<string, string>()
        {
            {"Host","smtp-mail.outlook.com"},
            {"Port","587"},
        };

        public static Dictionary<string, string> Home = new Dictionary<string, string>()
        {
            {"Host","home.pl"},
            {"Port","587"},
        };

        public static Dictionary<string, string> Wp = new Dictionary<string, string>()
        {
            {"Host","smtp.wp.pl"},
            {"Port","465"},
        };

        public static Dictionary<string, string> O2 = new Dictionary<string, string>()
        {
            {"Host","poczta.o2.pl"},
            {"Port","465"},
        };


        public static Dictionary<string, string> Onet = new Dictionary<string, string>()
        {
            {"Host","smtp.poczta.onet.pl"},
            {"Port","465"},
        };
    }
}
