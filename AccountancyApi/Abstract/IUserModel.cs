using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using System;
using System.Threading.Tasks;

namespace AccountancyApi.Abstract
{
    public interface IUserModel
    {
        Task<Object> CreateToken(LoginViewModel model, UserEntity user);

        Task<bool> Register(RegisterViewModel newUser);

        Task<bool> IsAvailable(string[] paramsArray);

        Task<bool> ChangePassword(PasswordChangeViewModel passwordData, UserEntity user);

        Task<bool> UpdateUserData(UserViewModel newData, UserEntity user);
    }
}
