using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.ViewModels
{
    public class PatientViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Ssn { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public double Weight { get; set; }
        public string History { get; set; }
        public string Doctor { get; set; }
    }
}
