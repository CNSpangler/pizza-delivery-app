class Schedule {
  MINUTES_PER_DAY = 60 * 24;
  #schedule = Array(this.MINUTES_PER_DAY).fill(false);

  nextOpenMinute() {
    return this.#schedule.findIndex(minute => !minute);
  }

  freeWindow(startMinute, endMinute) {
    return this.#schedule
      .slice(startMinute, endMinute)
      .every(minute => !minute);
  }

  addOrder(order) {
    for(let i = order.startMinute; i <= order.deliveryMinute; i++) {
      this.#schedule[i] = true;
    }
  }

  clear() {
    this.#schedule.fill(false);
  }
}

module.exports = Schedule;

