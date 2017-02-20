let assert = require('assert');

let TemperatureTracker = require('../TemperatureTracker.js');

describe('#getTemp()', () => {
  let temp = new TemperatureTracker();

  it('should work', () => {
    assert.equal(temp.getTemp(), 35);
  });

});
