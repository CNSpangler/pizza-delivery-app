const Schedule = require('./schedule');

describe('Schedule class', () => {
  const newSchedule = new Schedule();

  it('calculates the next available minute', () => {
    expect(newSchedule.nextOpenMinute).toEqual(1);
  });
});
