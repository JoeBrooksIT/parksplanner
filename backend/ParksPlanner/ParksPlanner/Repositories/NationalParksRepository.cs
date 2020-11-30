using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParksPlanner.Models;
using Microsoft.EntityFrameworkCore;

namespace ParksPlanner.Repositories
{
    public class NationalParksRepository : Repository<NationalParks>, IRepository<NationalParks>
    {
        ParksContext db;

        public NationalParksRepository(ParksContext context) : base(context)
        {
            db = context;
        }
        public override NationalParks GetById(int id)
        {
            return db.NationalParks.Where(o => o.Id == id).Include("Parks").FirstOrDefault();
        }
    }
}
