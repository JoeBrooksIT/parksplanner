using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParksPlanner.Repositories
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T GetById(int Id);
        void Create(T entity);
        void Delete(T entity);
        void Update(T entity);
    }
}


