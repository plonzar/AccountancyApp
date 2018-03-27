using Microsoft.AspNetCore.Identity;

namespace AccountancyApi.Entities
{
    public class UserEntity: IdentityUser
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public string PostCode { get; set; }

        public string City { get; set; }

        public string Nip { get; set; }
    }
}
