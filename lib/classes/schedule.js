class Schedule {
  MINUTES_PER_DAY = 60 * 24;
  #schedule = Array(this.MINUTES_PER_DAY).fill(false);

  get nextOpenMinute() {
    return this.#schedule.findIndex(min => min === false) + 1;
  }

  freeWindow(startMinute, endMinute) {
    const window = this.#schedule.slice(this.#schedule.indexOf(startMinute), this.#schedule.indexOf(endMinute));

    return window.every(item => item === false);
  }

  clear() {
    this.#schedule = Array(this.MINUTES_PER_DAY).fill(false);

    return this.#schedule;
  }

  addOrder(startMinute, endMinute) {
    const startIndex = this.#schedule.indexOf(startMinute);
    const endIndex = this.#schedule.indexOf(endMinute);

    this.#schedule.replace(startIndex, startMinute);
    console.log(this.#schedule);
  }

  print() {
    // grabs the schedule
    // console logs it, maybe as key falue pairs?
    console.log(this.#schedule);
    return this.#schedule;
  }
}

module.exports = Schedule;

// print this is a method that should print (console.log) the schedule. come up with a good visualization for this

// addOrder this is a method that takes an order. It will add the order to the schedule according to the order's startMinute and deliveryMinute.
