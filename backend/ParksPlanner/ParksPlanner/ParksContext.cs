using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParksPlanner.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace ParksPlanner
{
    public class ParksContext : DbContext
    {
        public DbSet<Parks> Parks { get; set; }
        public DbSet<NationalParks> NationalParks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionsString = "Server=(localdb)\\mssqllocaldb;Database=ParksDb;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionsString);

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Parks>().HasData(
                new Parks()
                {
                    Id = 1,
                    ParksId = 1,
                    Name = "Zion",
                    Description = "nonsenseText",
                    Places = "Utah",
                },

                new Parks()
                {
                    Id = 2,
                    ParksId = 2,
                    Name = "Grand Canyon",
                    Description = "nonsenseText",
                    Places = "Arizona",
                },

                new Parks()
                {
                    Id = 3,
                    ParksId = 3,
                    Name = "Denali",
                    Description = "nonsenseText",
                    Places = "Alaska",
                },

                new Parks()
                {
                    Id = 4,
                    ParksId = 4,
                    Name = "Redwood",
                    Description = "nonsenseText",
                    Places = "California",
                },

                new Parks()
                {
                    Id = 5,
                    ParksId = 5,
                    Name = "Yellowstone",
                    Description = "nonsenseText",
                    Places = "Wyoming",
                }

                );
                
        }
         
           
    }
   
}
