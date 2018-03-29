using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AccountancyApi.AutoMapperProfiles
{
    public class EmailConfigurationProfile: Profile
    {
        public EmailConfigurationProfile()
        {
            CreateMap<EmailConfigurationViewModel, EmailConfiguration>()
                .ReverseMap();
        }
    }
}
