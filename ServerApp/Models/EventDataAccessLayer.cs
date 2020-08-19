
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApplication.Models
{
    public class EventDataAccessLayer
    {
        EventManagementContext db = new EventManagementContext();


        public List<Event> GetAllEvents()
        {
            try
            {
                return db.Event.ToList();
            }
            catch
            {
                throw;
            }
        }

        public List<Event> GetFilterEvents(string value)
        {
            try
            {
                if (value == "All")
                    return db.Event.ToList();
                else if (value == "Free")
                    return db.Event.Where(x => x.Price == 0).ToList();
                else
                    return db.Event.Where(x => x.Discount > 0).ToList();
            }
            catch
            {
                throw;
            }
        }

        public int AddEvent(Event evt)
        {
            try
            {
                Event evTbl = new Event();
                evTbl.Description = evt.Description;
                evTbl.Discount = evt.Discount;
                evTbl.EventName = evt.EventName;
                evTbl.Price = evt.Price;

                db.Event.Add(evTbl);
                int res = db.SaveChanges();
                return res;
            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
                return -1;
            }

        }

    }
    public class EventJson
    {
        public int id { get; set; }
        public string eventName { get; set; }
        public string description { get; set; }
        public double? price { get; set; }
        public double? discount { get; set; }
    }
}
