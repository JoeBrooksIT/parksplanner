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
        //public DbSet<Parks> Park { get; set; }
        //public DbSet<NationalParks> NationalParks { get; set; }

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
                },

                new Parks()
                {
                    Id = 2,
                    ParksId = 2,   
                },

                new Parks()
                {
                    Id = 3,
                    ParksId = 3,  
                },

                new Parks()
                {
                    Id = 4,
                    ParksId = 4,    
                },

                new Parks()
                {
                    Id = 5,
                    ParksId = 5,
                }
                );      
        }         
    }  
}
