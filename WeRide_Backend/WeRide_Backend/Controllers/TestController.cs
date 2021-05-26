using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Npgsql;
using System.Text;
using WeRide_Backend.Models;
namespace WeRide_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public TestController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = "SELECT * FROM Test";
            DataTable table = new DataTable();
            StringBuilder sb = new StringBuilder();
            using (var myCon = new NpgsqlConnection(_configuration.GetConnectionString("postgres")))
            {
                myCon.Open();
                using (var myCommand = new NpgsqlCommand(query, myCon))
                {
                    var reader = myCommand.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Testcs test)
        {
            string query =  "INSERT INTO test values ('" + test.dummyData + "')" ;
            DataTable table = new DataTable();
            using (var myCon = new NpgsqlConnection(_configuration.GetConnectionString("postgres")))
            {
                myCon.Open();
                using (var myCommand = new NpgsqlCommand(query, myCon))
                {
                    var reader = myCommand.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("added");
        }
    }
}
