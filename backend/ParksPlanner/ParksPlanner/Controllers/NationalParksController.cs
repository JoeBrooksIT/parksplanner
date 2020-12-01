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
    public class NationalParksController : ControllerBase
    {
           private IRepository<NationalParks> nationalParksRepo;

            public NationalParksController(IRepository<NationalParks> nationalParksRepo)
            {
                this.nationalParksRepo = nationalParksRepo;
            }
    

        // GET: api/<NationalParksController>
        [HttpGet]
        public IEnumerable<NationalParks> Get()
        {
            return nationalParksRepo.GetAll();
        }

        // GET api/<NationalParksController>/5
        [HttpGet("{id}")]
        public NationalParks Get(int id)
        {
            return nationalParksRepo.GetById(id);
        }

        // POST api/<NationalParksController>
        [HttpPost]
        public IEnumerable<NationalParks> Post([FromBody] NationalParks nationalParks)
        {
            nationalParksRepo.Create(nationalParks);
            return nationalParksRepo.GetAll();
        }

        // PUT api/<NationalParksController>/5
        [HttpPut("{id}")]
        public IEnumerable<NationalParks> Put(int id, [FromBody] NationalParks nationalParks)
        {
            nationalParksRepo.Update(nationalParks);
            return nationalParksRepo.GetAll();
        }

        // DELETE api/<NationalParksController>/5
        [HttpDelete("{id}")]
        public IEnumerable<NationalParks> Delete(int id)
        {
            var nationalParks = nationalParksRepo.GetById(id);
            nationalParksRepo.Delete(nationalParks);
            return nationalParksRepo.GetAll();
        }
    }
}
