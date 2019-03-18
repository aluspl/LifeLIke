﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using LifeLike.Data.Models;
using LifeLike.Data.Models.Enums;
using LifeLike.Shared;
using LifeLike.Shared.Models;
using Microsoft.EntityFrameworkCore;

namespace LifeLike.Data
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly PortalContext _context;
        private readonly DbSet<T> _dbset;

        public Repository(PortalContext context)
        {
            _context = context;
            _dbset= _context.Set<T>();
        }
        public void Add(T entity)
        {
            _dbset.Add(entity);
            _context.SaveChanges();
        }
        public void Update(T entity)
        {
            _dbset.Update(entity);
            _context.SaveChanges();
        }
        public void Delete(Entity entity)
        {
            _context.Remove(entity);
            _context.SaveChanges();
        }
        public T GetDetail(Expression<Func<T, bool>> predicate)
        {
            return _dbset.First(predicate);
        }

        public IEnumerable<T> GetOverview(Expression<Func<T, bool>> predicate=null)
        {
            if (predicate != null)
                return _dbset.Where(predicate);
            return _dbset.AsEnumerable();               
        }

        public IQueryable<T> GetOverviewQuery(Expression<Func<T, bool>> predicate=null)
        {
            if (predicate != null)
                return _dbset.Where(predicate);
            return _dbset;
        }

        public void DeleteAll()
        {
             _context.Database.ExecuteSqlCommand($"TRUNCATE TABLE {typeof(T).Name}");
        }

        public void Update(Entity query, T entity)
        {
            _dbset.Update(entity);
            _context.SaveChanges();
        }
    }
}