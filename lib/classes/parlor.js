const Order = require("./order");

class Parlor {
  drivers = [];
  orders = [];

  constructor(drivers, orders) {
    this.drivers = [...drivers];
    this.orders = orders.map(order => {
      new Order(order.name, order.deliveryMinute, order.drivingDistanceInMinutes);
    });
  }
}

module.exports = Parlor;

// This class represents all drivers and orders. Keep track of the orders and drivers that are part of the parlor.

// #calculateSchedule updates the parlors delivery schedule, assigning orders to drivers. For now, don't worry about an optimal solution. Your only concern for now should be that a order is assigned to a driver only if the driver is free during the orders time. Some orders will not be able to be delivered. That's fine.

// addDriver takes a driver and adds the driver to the parlor. re#calculateSchedule

// addOrder takes an order and adds the order to the parlor. re#calculateSchedule

// printSchedule print the schedule for all delivery drivers

// calculateSchedule
// Update your #calculateSchedule method. Use a greedy algorithm.

// Greedy Algorithm
// Interval Scheduling - Greedy Polynomial Solution
