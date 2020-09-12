const Driver = require('./driver');

class Parlor {
  #drivers = [];
  #orders = [];

  #calculateSchedule(order) {
    // updates the parlors delivery schedule, assigning orders to drivers. Order is assigned to a driver only if the driver is free during the orders time. Some orders will not be able to be delivered. That's fine.

    const freeDriver = this.#drivers.find(driver => driver.currentSchedule.freeWindow(order.startMinute, order.deliveryMinute));

    if(freeDriver) {
      freeDriver.addOrder(order);
    }
  }

  addDriver(driver) {
    this.#drivers.push(driver);
  }
}

module.exports = Parlor;


// addDriver takes a driver and adds the driver to the parlor. re#calculateSchedule

// addOrder takes an order and adds the order to the parlor. re#calculateSchedule

// printSchedule print the schedule for all delivery drivers

// calculateSchedule
// Update your #calculateSchedule method. Use a greedy algorithm.

// Greedy Algorithm
// Interval Scheduling - Greedy Polynomial Solution
