const Schedule = require('./schedule');
const Order = require('./order');

describe('Schedule class', () => {
  it('calculates the next open minute', () => {
    const schedule = new Schedule();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    expect(schedule.nextOpenMinute()).toEqual(41);
  });

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    schedule.clear();

    expect(schedule.nextOpenMinute()).toEqual(0);
  });

  it('adds an order to the schedule and checks if the window is free', () => {
    const schedule = new Schedule();
    const order = new Order('Penny', 60, 40);

    schedule.addOrder(order);

    expect(schedule.freeWindow(order.startMinute, order.deliveryMinute)).toBeFalsy();

    expect(schedule.freeWindow(75, 180)).toBeTruthy();
  });
});
