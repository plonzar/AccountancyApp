using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using AutoMapper;

namespace AccountancyApi.AutoMapper
{
    public class InvoiceItemProfile: Profile
    {
        public InvoiceItemProfile()
        {
            CreateMap<InvoiceItemEntity, InvoiceItemViewModel>()
            .ReverseMap();
        }
    }
}
