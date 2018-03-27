using AccountancyApi.Abstract;
using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AccountancyApi.Models
{
    public class UserModel : IUserModel
    {
        ApplicationDbContext context;
        private readonly SignInManager<UserEntity> signInManager;
        private readonly UserManager<UserEntity> userManager;
        private readonly IConfiguration config;

        public UserModel(ApplicationDbContext context, SignInManager<UserEntity> signInManager, UserManager<UserEntity> userManager, IConfiguration config)
        {
            this.context = context;
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.config = config;
        }

        public async Task<Object> CreateToken(LoginViewModel model, UserEntity user)
        {
            var signInSuccessful = await signInManager.CheckPasswordSignInAsync(user, model.Password, false);

            if (signInSuccessful.Succeeded)
            {
                try
                {
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Tokens:Key"]));
                    var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(
                        config["Tokens:Issuer"],
                        config["Tokens:Audience"],
                        claims, 
                        expires: DateTime.UtcNow.AddMinutes(10),
                        signingCredentials: credentials
                        );

                    var result = new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiration = token.ValidTo
                    };

                    return result;
                }
                catch (Exception error)
                {
                    Console.WriteLine(error.Message);
                    return null;
                }
            }
            else
            {
                return null;
            }
        }

        public async Task<bool> Register(RegisterViewModel user)
        {
            var existingUser = await userManager.FindByEmailAsync(user.Email);

            if(existingUser == null)
            {
                var newUser = new UserEntity()
                {
                    Name = user.Name,
                    Address = user.Address,
                    City = user.City,
                    Email = user.Email,
                    Nip = user.Nip,
                    PostCode = user.PostCode,
                    UserName = user.UserName,
                };

                var success = await userManager.CreateAsync(newUser, user.Password);
                if (!success.Succeeded)
                {
                    return false;
                }
                return true;

            }
            return false;

        }

        public async Task<bool> IsAvailable(string[] paramsArray)
        {
            UserEntity user = null;

            if(paramsArray[0] == "email")
            {
                user = await userManager.FindByEmailAsync(paramsArray[1]);
            }
            if (paramsArray[0] == "name")
            {
                user = await userManager.FindByNameAsync(paramsArray[1]);
            }

            if (user == null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<bool> ChangePassword(PasswordChangeViewModel passwordData, UserEntity user)
        {
            var result = await userManager.ChangePasswordAsync(user, passwordData.Password, passwordData.newPassword);

            if (result.Succeeded)
            {
                return true;
            }
            return false;
        }

        public async Task<bool> UpdateUserData(UserViewModel newData, UserEntity user)
        {
            user.Address = newData.Address;
            user.City = newData.City;
            user.Name = newData.Name;
            user.Nip = newData.Nip;
            user.PostCode = newData.PostCode;

            var result = await userManager.UpdateAsync(user);

            if (result.Succeeded)
            {
                return true;
            }
            return false;
        }
    }
}
