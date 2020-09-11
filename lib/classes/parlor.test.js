const Parlor = require('./parlor');

describe('Parlor class', () => {
  it('constructs a new Parlor', () => {
    const parlor = new Parlor(['penny', 'beka', 'chelsea'], [{ name: 'wendi', deliveryMinute: 30, drivingDistanceInMinutes: 75 }, { name: 'lucas', deliveryMinute: 30, drivingDistanceInMinutes: 75 }]);

    expect(parlor.drivers).toEqual([{
      name: 'penny',
      currentSchedule: { MINUTES_PER_DAY: 1440 }
    }, {
      name: 'beka',
      currentSchedule: { MINUTES_PER_DAY: 1440 }
    }, {
      name: 'chelsea',
      currentSchedule: { MINUTES_PER_DAY: 1440 }
    }]);
  });
});
