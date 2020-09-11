const Schedule = require('./schedule');

describe('Schedule class', () => {
  const newSchedule = new Schedule();

  it('calculates the next available minute', () => {
    expect(newSchedule.nextOpenMinute).toEqual(1);
  });

  it('returns true if unscheduled during the time window, otherwise returns false', () => {
    expect(newSchedule.freeWindow(20, 55)).toEqual(true);
  });

  it('uses clear to reset schedule so all values are false', () => {
    expect(newSchedule.clear().every(item => item === false)).toBeTruthy();
  });

  it('uses addOrder method to change schedule array items to true during the window', () => {

  });

  it('prints the current schedule using print method', () => {

  });
});
