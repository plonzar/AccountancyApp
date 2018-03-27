using AccountancyApi.Abstract;
using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace AccountancyApi.Controllers
{
    [Route("api/account/[action]")]
    public class AccountController : Controller
    {
        private SignInManager<UserEntity> signInManager;
        private UserManager<UserEntity> userManager;
        private IMapper mapper;
        private IUserModel userModel;

        public object NetworkCredentials { get; private set; }

        public AccountController(SignInManager<UserEntity> signInManager, UserManager<UserEntity> userManager, IMapper mapper, IUserModel userModel)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.mapper = mapper;
            this.userModel = userModel;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);

                if (result.Succeeded)
                {
                    var user = await userManager.FindByNameAsync(model.UserName);
                    return await Task.FromResult(Ok(mapper.Map<UserEntity, UserViewModel>(user)));
                }
            }
            return await Task.FromResult(BadRequest("Bad username or password"));
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {

            if (ModelState.IsValid)
            {
                var result = await userModel.Register(model);
                if (result)
                {
                    return Created("", null);
                }
                return BadRequest();
            }
            return BadRequest("Invalid data");
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Logout()
        {
            try
            {
                await signInManager.SignOutAsync();
                return Ok();
            }
            catch (System.Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> ChangePassword([FromBody] PasswordChangeViewModel userData)
        {
            var user = await userManager.FindByNameAsync(User.Identity.Name);
            if (user != null)
            {
                var result = await userManager.ChangePasswordAsync(user, userData.Password, userData.newPassword);

                if (result.Succeeded)
                {   
                    return Ok();
                }
                return BadRequest("PasswordMismatch");
            }
            return BadRequest();
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> UpdateUser([FromBody] UserViewModel userData)
        {
            var user = await userManager.FindByNameAsync(User.Identity.Name);

            if (user != null)
            {
                var success = await userModel.UpdateUserData(userData, user);

                if (success)
                {
                    return Ok();
                }
                return BadRequest();
            }
            return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> CreateToken([FromBody] LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await userManager.FindByNameAsync(model.UserName);

                if (user != null)
                {
                    object result = await userModel.CreateToken(model, user);

                    if(result != null)
                    {
                        return Created("", result);
                    }
                }
            }
            return BadRequest();
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult CheckIfExpired()
        {
            return Ok(false);
        }

        [HttpPost]
        public async Task<IActionResult> IsAvailable([FromBody] string[] paramsArray)
        {
            var result = await userModel.IsAvailable(paramsArray);

            return Ok(result);
        }

    }
}