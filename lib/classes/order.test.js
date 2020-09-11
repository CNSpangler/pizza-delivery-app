const Order = require('./order');

describe('Order model', () => {
  it('uses startMinute to calculate when we should start cooking pizza', () => {
    const newOrder = new Order('Penny', 120, 20);

    console.log(newOrder.startMinute);
  });
});
