using AccountancyApi.Abstract;
using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace AccountancyApi.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/email/[action]")]
    public class EmailController : Controller
    {
        private IEmailModel emailModel;
        private UserManager<UserEntity> userManager;
        private IMapper mapper;

        public EmailController(IEmailModel emailModel, UserManager<UserEntity> userManager, IMapper mapper)
        {
            this.emailModel = emailModel;
            this.userManager = userManager;
            this.mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> SendMail([FromBody] EmailMessageViewModel messageConfig)
        {
            if (ModelState.IsValid)
            {
                var user = await userManager.FindByNameAsync(User.Identity.Name);

                if (user != null)
                {
                    if (emailModel.SetupEmailConfig(user))
                    {
                        if (emailModel.SendMessage(messageConfig, user))
                        {
                            return Ok();
                        }
                        return BadRequest();
                    }
                }
            }
            return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> ResetSmtpSettings()
        {
            var user = await userManager.FindByNameAsync(User.Identity.Name);
            if (user != null)
            {
                if (emailModel.ResetDefaultSettings(user))
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult>  ChangeEmailConfiguration([FromBody] EmailConfigurationViewModel emailConfig)
        {
            if (ModelState.IsValid)
            {
                var user = await userManager.FindByNameAsync(User.Identity.Name);
                if (user != null)
                {
                    if (emailModel.ChangeEmailConfiguration(mapper.Map<EmailConfigurationViewModel, EmailConfiguration>(emailConfig), user))
                    {
                        return Ok();
                    }
                }
            }
            return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> EmailAutoConfig([FromBody] AutoConfigurationViewModel emailConfig)
        {
            if (ModelState.IsValid)
            {
                var user = await userManager.FindByNameAsync(User.Identity.Name);
                if (user != null)
                {
                    var config = emailModel.SmtpAutoConfiguration(emailConfig, user);
                    if (config != null)
                    {
                        config.Password = "";
                        return Ok(mapper.Map<EmailConfiguration, EmailConfigurationViewModel>(config));
                    }
                }
            }
            return BadRequest();
        }
    }
}