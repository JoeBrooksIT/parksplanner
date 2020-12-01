using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParksPlanner.Models
{
    public class Parks
    {
        public int Id { get; set; }
        public int ParksId { get; set; }
        

        public virtual ICollection<NationalParks> NationalParks { get; set; }

    }
}
