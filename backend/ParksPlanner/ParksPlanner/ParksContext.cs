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
        public DbSet<Park> Park { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionsString = "Server=(localdb)\\mssqllocaldb;Database=ParksDb;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionsString);

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Park>().HasData(
                new Park()
                {
                    Id = 1,
                    ApiId = "77E0D7F0-1942-494A-ACE2-9004D2BDC59E",
                },

                new Park()
                {
                    Id = 2,
                    ApiId = "6DA17C86-088E-4B4D-B862-7C1BD5CF236B",   
                },

                new Park()
                {
                    Id = 3,
                    ApiId = "E4C7784E-66A0-4D44-87D0-3E072F5FEF43",  
                }
                );      
        }         
    }  
}
