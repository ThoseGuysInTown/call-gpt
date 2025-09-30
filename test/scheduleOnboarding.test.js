const scheduleOnboarding = require('../functions/scheduleOnboarding');

test('Expect placeOrder to return an object with a price and order number', () => {
  const order = JSON.parse(scheduleOnboarding({ callerName: 'Kevin', preferredTime: 10 }));

  expect(order).toHaveProperty('confirmedTime');
  expect(order).toHaveProperty('status');
  
});