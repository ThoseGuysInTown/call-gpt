const scheduleOnboarding = require('../functions/scheduleOnboarding');

test('Expect placeOrder to return an object with a price and order number', () => {
  const order = JSON.parse(scheduleOnboarding({model: 'airpods pro', quantity: 10}));

  expect(order).toHaveProperty('orderNumber');
  expect(order).toHaveProperty('price');
});