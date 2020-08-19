using System;
using System.Collections.Generic;

namespace ReactApplication.Models
{
    public partial class Event
    {
        public int Id { get; set; }
        public string EventName { get; set; }
        public string Description { get; set; }
        public double? Price { get; set; }
        public double? Discount { get; set; }
    }

    public  class EventFilter
    {
      public string Name { get; set; }
    }
}
