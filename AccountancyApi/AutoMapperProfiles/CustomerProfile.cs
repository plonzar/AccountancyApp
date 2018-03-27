using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using AutoMapper;

namespace AccountancyApi.AutoMapper
{
    public class CustomerProfile: Profile
    {
        public CustomerProfile()
        {
            CreateMap<CustomerEntity, CustomerViewModel>()
                .ReverseMap();
        }
    }
}
