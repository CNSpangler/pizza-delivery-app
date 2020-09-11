const Schedule = require('./schedule');

describe('Schedule class', () => {
  const newSchedule = new Schedule();

  it('calculates the next available minute', () => {
    expect(newSchedule.nextOpenMinute).toEqual(1);
  });

  it('returns true if unscheduled during the time window, otherwise returns false', () => {
    expect(newSchedule.freeWindow(20, 55)).toEqual(true);
  });
});
