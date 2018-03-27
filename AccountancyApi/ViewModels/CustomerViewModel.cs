using System.ComponentModel.DataAnnotations;

namespace AccountancyApi.ViewModels
{
    public class CustomerViewModel
    {

        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string PostCode { get; set; }

        public string Email { get; set; }

        [Required]   
        public string NIP { get; set; }
    }
}
