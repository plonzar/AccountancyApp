using System.ComponentModel.DataAnnotations;

namespace AccountancyApi.Entities
{
    public class CustomerEntity
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string PostCode { get; set; }

        public string Email { get; set; }

        public string NIP { get; set; }

        public UserEntity User { get; set; }
    }
}
