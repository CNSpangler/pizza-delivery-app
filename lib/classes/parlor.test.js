const Parlor = require('./parlor');
const Driver = require('./driver');

describe('Parlor class', () => {
  it('adds a new Driver to the Parlor', () => {
    const parlor = new Parlor();
    const driver = new Driver('Penny');
    parlor.addDriver(driver);
  });

  it('adds an order to a driver with a freeWindow', () => {
    
  });
});
