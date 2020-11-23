using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParksPlanner.Models
{
    public class Parks
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string CampGrounds { get; set; }
        public string LessonPlans { get; set; }
        public string Description { get; set; }
        public string VisitorCenter { get; set; }
        public string Articles { get; set; }
        public string Peoples { get; set; }
        public string Places { get; set; }
        public virtual ICollection<NationalParks> NationalParks { get; set; }

    }
}
