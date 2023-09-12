using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProAtividade.API.Models;

namespace ProAtividade.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opitions) : base(opitions)
        {
            
        }
        public DbSet<Atividade> Atividades { get; set; }
    }
}