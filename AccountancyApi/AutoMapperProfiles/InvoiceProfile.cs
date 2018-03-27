using AccountancyApi.Entities;
using AccountancyApi.ViewModels;
using AutoMapper;

namespace AccountancyApi.AutoMapper
{
    public class InvoiceProfile: Profile
    {
        public InvoiceProfile()
        {
            CreateMap<InvoiceEntity, InvoiceViewModel>()
                .ReverseMap();
        }
    }
}
