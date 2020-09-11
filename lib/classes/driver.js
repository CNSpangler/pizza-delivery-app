const Schedule = require("./schedule");

class Driver {
  name;
  currentSchedule;

  constructor(name) {
    this.name = name;
    this.currentSchedule = new Schedule();
  }
}

module.exports = Driver;

// This class holds information about a delivery driver (name, currentSchedule). Use the Schedule class for the currentSchedule property.