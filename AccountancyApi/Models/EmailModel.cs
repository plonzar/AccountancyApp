using AccountancyApi.Abstract;
using AccountancyApi.DefaultSettings;
using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;

namespace AccountancyApi.Models
{
    public class EmailModel : IEmailModel
    {
        private ApplicationDbContext appContext;
        private SmtpClient client;
       

        public EmailModel(ApplicationDbContext appContext)
        {
            this.appContext = appContext;
        }

        public bool ResetDefaultSettings(UserEntity user)
        {
            try
            {
                var emailConfig = appContext.EmailsConfigurations.Where(c => c.User == user).SingleOrDefault();

                emailConfig.Host = DefaultEmailConfig.Host;
                emailConfig.Password = DefaultEmailConfig.Password;
                emailConfig.Port = DefaultEmailConfig.Port;
                emailConfig.SslEnabled = DefaultEmailConfig.SslEnabled;
                emailConfig.Username = DefaultEmailConfig.Username;

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

            if (emailConfig.Username == DefaultEmailConfig.Username)
            {
                messageConfig.MessageBody += MessageConfiguration.postMessageClause;
            }

            MailMessage mailMessage = new MailMessage();

            mailMessage.From = new MailAddress(emailConfig.Username, user.Name);
            mailMessage.To.Add(messageConfig.Receiver);
            mailMessage.Body = messageConfig.MessageBody;
            mailMessage.Subject = messageConfig.Subject;
            if (DefaultEmailConfig.Username == emailConfig.Username)
            {
                mailMessage.ReplyToList.Add(new MailAddress(user.Email));
            }
            mailMessage.IsBodyHtml = true;
           
            try
            {
                client.Send(mailMessage);
                client.Dispose();
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

                //1) try to send message with this settings
                var message = new EmailMessageViewModel
                {
                    MessageBody = "test",
                    Subject = "test",
                    Receiver = DefaultEmailConfig.Username

                };
                SetupEmailConfig(user);
                var success = SendMessage(message, user);

                //if 1) faild next program try to send message with port number 587
                if (!success)
                {
                    currentEmailConfig.Port = 587;
                    SetupEmailConfig(user);
                    success = SendMessage(message, user);
                }

                //if successful changes are saved
                if (success)
                {
                    appContext.SaveChanges();
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
                    client.EnableSsl = emailConfig.SslEnabled;
                    client.Credentials = new System.Net.NetworkCredential(emailConfig.Username, emailConfig.Password);
                    client.Timeout = 5000;

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

                newConfig.Host = DefaultEmailConfig.Host;
                newConfig.Password = DefaultEmailConfig.Password;
                newConfig.Port = DefaultEmailConfig.Port;
                newConfig.SslEnabled = DefaultEmailConfig.SslEnabled;
                newConfig.Username = DefaultEmailConfig.Username;
                newConfig.User = user;

                appContext.EmailsConfigurations.Add(newConfig);

                appContext.SaveChanges();
                return true;
            }
            catch (Exception error)
            {
                Console.WriteLine(error);
                return false;
            }
        }

        public EmailConfiguration SmtpAutoConfiguration(AutoConfigurationViewModel config,UserEntity user)
        {
            var currentEmailConfig = appContext.EmailsConfigurations.Where(c => c.User == user).SingleOrDefault();
            Dictionary<string, string> choosenProvider = new Dictionary<string, string>();
            string[] possibleSmtp = { };
            bool tryTestingSmtpServers = false;

            //Choose domain
            switch (config.Domain)
            {
                case "Gmail":
                    choosenProvider = CommonUsedEmailProviders.Gmail;
                    break;
                case "Yahoo":
                    choosenProvider = CommonUsedEmailProviders.Yahoo;
                    break;
                case "Outlook":
                    choosenProvider = CommonUsedEmailProviders.Outlook;
                    break;
                case "Home":
                    choosenProvider = CommonUsedEmailProviders.Home;
                    break;
                case "Wirtualna Polska":
                    choosenProvider = CommonUsedEmailProviders.Wp;
                    break;
                case "O2":
                    choosenProvider = CommonUsedEmailProviders.O2;
                    break;
                case "Onet":
                    choosenProvider = CommonUsedEmailProviders.Onet;
                    break;
                default:
                    possibleSmtp = FetchDomainSmtp(config.UserName);
                    choosenProvider.Add("Host", possibleSmtp[1]);
                    choosenProvider.Add("Port", "25");
                    tryTestingSmtpServers = true;
                    break;
            }
           
            //setConfiguration

            currentEmailConfig.Host = choosenProvider["Host"];
            currentEmailConfig.Password = config.Password;
            currentEmailConfig.Port = Int32.Parse(choosenProvider["Port"]);
            currentEmailConfig.SslEnabled = true;
            currentEmailConfig.Username = config.UserName;

            //test for passed data
            //try to send message to addres in DefaultEmailConfig class
            var message = new EmailMessageViewModel
            {
                MessageBody = "test",
                Subject = "test",
                Receiver = DefaultEmailConfig.Username
            };

            SetupEmailConfig(user);
            var success = SendMessage(message, user);

            //if bad try with diffrent port from CommonPorts

            if (!success)
            {
                foreach (var port in CommonPorts.ports)
                {
                    currentEmailConfig.Port = port;
                    SetupEmailConfig(user);
                    success = SendMessage(message, user);
                    if (success)
                    {
                        break;
                    }
                }

                //If user passed different host than these in CommonUsedEmailProviders class
                //Testing on default port 25
                if (tryTestingSmtpServers)
                {
                    currentEmailConfig.Port = 25;
                    foreach (var server in possibleSmtp)
                    {
                        currentEmailConfig.Host = server;
                        SetupEmailConfig(user);
                        success = SendMessage(message, user);
                        if (success)
                        {
                            break;
                        }
                    }
                }
            }

            if (success)
            {
                appContext.SaveChanges();
                return currentEmailConfig;
            }

            return null;
        }

        //Return array of possible smtp servers created with common beginings and domain name taken from user email
        private string[] FetchDomainSmtp(string email)
        {
            var emailArray = email.Split("@");

            string[] possibleSmtpAddress =
            {
                emailArray[1],
                "smtp."+emailArray[1],
                "mail."+emailArray[1],
                "poczta."+emailArray[1]
            };

            return possibleSmtpAddress;
        }
    }
}
