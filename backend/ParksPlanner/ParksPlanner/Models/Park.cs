using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace ParksPlanner.Models
{
    public class Park
    {
        public int Id { get; set; }
        public string ApiId { get; set; }
    }
}
