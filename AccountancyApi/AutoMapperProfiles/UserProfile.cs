using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.AutoMapperProfiles
{
    public class UserProfile: Profile
    {
        public UserProfile()
        {
            CreateMap<UserEntity, UserViewModel>()
                .ForMember(uvm => uvm.Address, u => u.MapFrom(ue => ue.Address))
                .ForMember(uvm => uvm.City, u => u.MapFrom(ue => ue.City))
                .ForMember(uvm => uvm.Email, u => u.MapFrom(ue => ue.Email))
                .ForMember(uvm => uvm.Name, u => u.MapFrom(ue => ue.Name))
                .ForMember(uvm => uvm.Nip, u => u.MapFrom(ue => ue.Nip))
                .ForMember(uvm => uvm.PostCode, u => u.MapFrom(ue => ue.PostCode))
                .ReverseMap();
        }
    }
}
