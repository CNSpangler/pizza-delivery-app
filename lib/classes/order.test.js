const Order = require('./order');

describe('Order model', () => {
  const newOrder = new Order('Penny', 120, 20);

  it('makes sure a new order has a name and a deliveryMinute', () => {
    expect(newOrder.name).toEqual('Penny');
    expect(newOrder.deliveryMinute).toEqual(120);
  });

  it('uses startMinute to calculate when we should start cooking pizza', () => {
    expect(newOrder.startMinute).toEqual(80);
  });
});
