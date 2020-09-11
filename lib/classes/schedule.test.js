const Schedule = require('./schedule');

describe('Schedule class', () => {
  const newSchedule = new Schedule([40, 50, 60, 70, 80, 90, 100, 110, 120, 125]);

  it('checks if a created Schedule has the correct properties', () => {
    expect(newSchedule.schedule).toEqual([40, 50, 60, 70, 80, 90, 100, 110, 120, 125]);
  });
});
