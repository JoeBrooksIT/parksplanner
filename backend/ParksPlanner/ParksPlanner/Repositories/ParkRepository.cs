using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParksPlanner.Models;
using Microsoft.EntityFrameworkCore;

namespace ParksPlanner.Repositories
{
    public class ParkRepository: Repository<Park>, IRepository<Park>
    {
        ParksContext db;
    }
    public ParkRepository(ParksContext context): base (context)
    {
        db = context;
    }
    public override IEnumerable<Park> GetAll()
    {
        return db.Park.Where(o => o.Id == id).FirstOrDefault():
    }
}
