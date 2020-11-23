using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParksPlanner.Models
{
    public class NationalParks
    {
        public string Alert { get; set; }
        public string NewReleases { get; set; }
        public string Events { get; set; }

        public virtual Parks Parks { get; set; }
    }
}
