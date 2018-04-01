using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.Abstract
{
    public interface IEmailModel
    {
        bool ChangeEmailConfiguration(EmailConfiguration emailConfig, UserEntity user);

        bool ResetDefaultSettings(UserEntity user);

        bool SendMessage(EmailMessageViewModel messageConfig, UserEntity user);

        bool SetupEmailConfig(UserEntity user);

        bool AddNewUserEmailConfig(UserEntity user);

        EmailConfiguration SmtpAutoConfiguration(AutoConfigurationViewModel config, UserEntity user);
    }
}
