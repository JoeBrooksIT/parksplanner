using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ParksPlanner.Models;
using ParksPlanner.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ParksPlanner.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParkController : ControllerBase
    {
           private IRepository<Park> ParkRepo;

            public ParkController(IRepository<Park> ParkRepo)
            {
                this.ParkRepo = ParkRepo;
            }
    

        // GET: api/<ParkController>
        [HttpGet]
        public IEnumerable<Park> Get()
        {
            return ParkRepo.GetAll();
        }

        // GET api/<ParkController>/5
        [HttpGet("{id}")]
        public Park Get(int id)
        {
            return ParkRepo.GetById(id);
        }

        // POST api/<ParkController>
        [HttpPost]
        public IEnumerable<Park> Post([FromBody] Park park)
        {
            if (ParkRepo.GetByApiId(park.ApiId) == null)
            {
                ParkRepo.Create(park);
            }
            return ParkRepo.GetAll();
        }

        // PUT api/<ParkController>/5
        [HttpPut("{id}")]
        public IEnumerable<Park> Put(int id, [FromBody] Park Park)
        {
            ParkRepo.Update(Park);
            return ParkRepo.GetAll();
        }

        // DELETE api/<ParkController>/5
        [HttpDelete("{id}")]
        public IEnumerable<Park> Delete(int id)
        {
            var Park = ParkRepo.GetById(id);
            ParkRepo.Delete(Park);
            return ParkRepo.GetAll();
        }
    }
}
