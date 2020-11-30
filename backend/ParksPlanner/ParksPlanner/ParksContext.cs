using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParksPlanner.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace ParksPlanner
{
    public class ParksContext :DbContext
    {
        public DbSet<Parks> Parks { get; set; }
        public DbSet<NationalParks> NationalParks { get; set; }

        protected override void OnConfiguring(DbContextOptions optionsBuilder)
        {
            var connectionsString = "Server=(localdb)\\mssqllocaldb;Database=ParksDb;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionsString);

            base.OnConfiguring(optionsBuilder);
        }
           
    }
   
}
