using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAgil.API.Data;
using ProAgil.API.Model;

namespace ProAgil.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public readonly DataContext _context; 

        public ValuesController(DataContext context)
        {
            _context = context; 
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Evento>> Get()
        {
            return _context.Eventos.ToList(); 
            // return new Evento[] {
            //     new Evento() {
            //          Id = 1,
            //          Tema = "Angular + .NET Core",
            //          Local = "São Paulo",
            //          Lote = "1º lote",
            //          QtdPessoas = 250,
            //          Data = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy")
            //     },
            //        new Evento() {
            //          Id = 2,
            //          Tema = "HTML5, CSS3, JS",
            //          Local = "São Paulo",
            //          Lote = "2º lote",
            //          QtdPessoas = 400,
            //          Data = DateTime.Now.AddDays(3).ToString("dd/MM/yyyy")
            //     }
            //  };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Evento> Get(int id)
        {
             return _context.Eventos.ToList().FirstOrDefault(x => x.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
