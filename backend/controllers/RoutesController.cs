using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoutesController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetRoutes()
        {
            var routes = new List<RouteModel>
            {
                new RouteModel
                {
                    Id = 1,
                    Origin = "Göteborg",
                    Destination = "Stockholm",
                    TransportType = "Train",
                    DurationMinutes = 195,
                    Price = 399
                },
                new RouteModel
                {
                    Id = 2,
                    Origin = "Göteborg",
                    Destination = "Stockholm",
                    TransportType = "Bus",
                    DurationMinutes = 420,
                    Price = 199
                },
                new RouteModel
                {
                    Id = 3,
                    Origin = "Göteborg",
                    Destination = "Stockholm",
                    TransportType = "Flight",
                    DurationMinutes = 60,
                    Price = 799
                }
            };

            return Ok(routes);
        }
    }
}