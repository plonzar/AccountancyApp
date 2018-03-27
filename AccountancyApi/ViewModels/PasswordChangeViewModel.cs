using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.ViewModels
{
    public class PasswordChangeViewModel : LoginViewModel
    {
        public string newPassword { get; set; }
    }
}
