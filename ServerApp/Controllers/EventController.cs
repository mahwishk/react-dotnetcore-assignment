using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactApplication.Models;

namespace ReactApplication.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        EventDataAccessLayer objEvent = new EventDataAccessLayer();


        [HttpGet("[action]")]
        public List<Event> Index()
        {
            var res = objEvent.GetAllEvents();
            return res;
        }

        [HttpPost]
        [Route("AddEvent")]
        public string AddEvent([FromBody]Event Evt)
        {
            var res = objEvent.AddEvent(Evt);
            if (res < 0)
                return "Failure";
            else
                return "Success";
        }

        [HttpPost]
        [Route("GetFilteredEvents")]
        public List<Event> GetFilteredEvents([FromBody]EventFilter FilteredValue)
        {
            var res = objEvent.GetFilterEvents(FilteredValue.Name);
            return res;
        }

    }
}
