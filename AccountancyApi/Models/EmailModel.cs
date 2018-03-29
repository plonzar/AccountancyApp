using AccountancyApi.Abstract;
using AccountancyApi.DefaultSettings;
using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace AccountancyApi.Models
{
    public class EmailModel : IEmailModel
    {
        private ApplicationDbContext appContext;
        private SmtpClient client;
        private readonly DefaultEmailConfig defaultEmail = new DefaultEmailConfig();

        public EmailModel(ApplicationDbContext appContext)
        {
            this.appContext = appContext;
        }

        public bool ResetDefaultSettings(UserEntity user)
        {
            try
            {
                var emailConfig = appContext.EmailsConfigurations.Where(c => c.User == user).SingleOrDefault();

                emailConfig.Host = defaultEmail.Host;
                emailConfig.Password = defaultEmail.Password;
                emailConfig.Port = defaultEmail.Port;
                emailConfig.SslEnabled = defaultEmail.SslEnabled;
                emailConfig.Username = defaultEmail.Username;

                appContext.SaveChanges();
                return true;
            }
            catch (Exception error)
            {
                Console.WriteLine(error);
                return false;
            }
        }

        public bool SendMessage(EmailMessageViewModel messageConfig, UserEntity user)
        {
            messageConfig.MessageBody = messageConfig.MessageBody.Replace("\n", "<br>");

            var emailConfig = appContext.EmailsConfigurations.Where(c => c.User == user).SingleOrDefault();

            MailMessage mailMessage = new MailMessage(new MailAddress(emailConfig.Username), new MailAddress(messageConfig.Receiver));

            mailMessage.Body = messageConfig.MessageBody;
            mailMessage.Subject = messageConfig.Subject;
            mailMessage.IsBodyHtml = true;

            try
            {
                client.Send(mailMessage);
                return true;
            }
            catch (Exception error)
            {
                Console.WriteLine(error);
                return false;
            }
        }

        public bool ChangeEmailConfiguration(EmailConfiguration emailConfig, UserEntity user)
        {
            try
            {
                var currentEmailConfig = appContext.EmailsConfigurations.Where(c => c.User == user).SingleOrDefault();

                currentEmailConfig.Host = emailConfig.Host;
                currentEmailConfig.Password = emailConfig.Password;
                currentEmailConfig.Port = emailConfig.Port;
                currentEmailConfig.SslEnabled = emailConfig.SslEnabled;
                currentEmailConfig.Username = emailConfig.Username;

                appContext.SaveChanges();
                return true;
            }
            catch (Exception error)
            {
                Console.WriteLine(error);
                return false;
            }
        }

        public bool SetupEmailConfig(UserEntity user)
        {
            var emailConfig = appContext.EmailsConfigurations.Where(c => c.User == user).SingleOrDefault();

            try
            {
                if (emailConfig != null)
                {
                    client = new SmtpClient();
                    client.Host = emailConfig.Host;
                    client.Port = emailConfig.Port;
                    client.EnableSsl = true;
                    client.Credentials = new System.Net.NetworkCredential
                    {
                        UserName = emailConfig.Username,
                        Password = emailConfig.Password
                    };
                    return true;
                }
                return false;
            }
            catch (Exception error)
            {
                Console.WriteLine(error);
                return false;
            }
        }

        public bool AddNewUserEmailConfig(UserEntity user)
        {
            try
            {
                EmailConfiguration newConfig = new EmailConfiguration();

                newConfig.Host = defaultEmail.Host;
                newConfig.Password = defaultEmail.Password;
                newConfig.Port = defaultEmail.Port;
                newConfig.SslEnabled = defaultEmail.SslEnabled;
                newConfig.Username = defaultEmail.Username;
                newConfig.User = user;

                return true;
            }
            catch (Exception error)
            {
                Console.WriteLine(error);
                return false;
            }
        }
    }
}
