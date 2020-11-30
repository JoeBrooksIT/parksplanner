using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParksPlanner.Models;
using Microsoft.EntityFrameworkCore;

namespace ParksPlanner.Repositories
{
    public class ParksRepository : Repository<Parks>, IRepository<Parks>
    {
        ParksContext db;

        public ParksRepository(ParksContext context) : base(context)
        {
            db = context;
        }

        public override IEnumerable<Parks> GetAll()
        {
            return db.Parks.Include("NationalParks").ToList();
        }
    }
}
