const Driver = require('./driver');

describe('Driver class', () => {
  it('constructs a driver with name and schedule', () => {
    const driver = new Driver('Penny');

    expect(driver).toEqual({
      name: 'Penny',
      currentSchedule: { MINUTES_PER_DAY: 1440 }
    });
  });
});
