class Schedule {
  MINUTES_PER_DAY = 60 * 24;
  #schedule = Array(this.MINUTES_PER_DAY).fill(false);

  get nextOpenMinute() {
    return this.#schedule.findIndex(min => min === false) + 1;
  }

  get freeWindow(startMinute, endMinute) {

  }
}

module.exports = Schedule;

// freeWindow this is a method that takes a startMinute and endMinute. It returns true if unscheduled during the time window, otherwise false.

// clear this is a method that should clear the #schedule make all positions false

// print this is a method that should print (console.log) the schedule. come up with a good visualization for this

// addOrder this is a method that takes an order. It will add the order to the schedule according to the order's startMinute and deliveryMinute.
