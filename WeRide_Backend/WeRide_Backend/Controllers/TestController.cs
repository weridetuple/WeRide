using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace WeRide_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        //private static string Host = "weride-postgres-server.postgres.database.azure.com";
        //private static string User = "WeRide_Corporation@weride-postgres-server";
        //private static string DBname = "postgres";
        //private static string Password = "TaylorSwift2021";
        //private static string Port = "5432";

        public TestController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string con = "Server=weride-postgres-server.postgres.database.azure.com,5432; User Id=WeRide_Corporation@weride-postgres-server; Database=postgres; Password=TaylorSwift2021; SSL=True";
            //string con1 = "Database=postgres; Data Source=weride-postgres-server.postgres.database.azure.com; User Id=WeRide_Corporation@weride-postgres-server; Password=TaylorSwift2021";
            string query = @"
                    select DummyData from dbo.Test";
            DataTable table = new DataTable();
            string sqlDataSource = con;
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
    }
}
