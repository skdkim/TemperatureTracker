let assert = require('assert');

let TemperatureTracker = require('../TemperatureTracker.js');

describe('#insert()', () => {
  let temp = new TemperatureTracker();

  it('should throw and error if value is not a number', () => {
    assert.throws(() => {
      temp.insert("hello");
    }, 'invalid entry');
  });

  it('should insert properly the first temperature', () =>{
    temp.insert(5);

    assert.equal(temp.allTemps[5], true);
  });

  it('should insert properly consecutive temperatures', () => {
    temp.insert(20);

    assert.equal(temp.allTemps[20], true);
  });

  it('should realize when the same temperture has been added', () => {
    temp.insert(20);

    assert.equal(temp.allTemps[20], 2);
  });
});

describe('#getMax()', () => {
  let temp = new TemperatureTracker();
  it('should throw and error if no temperatures are added', () => {
    assert.throws(() => {
      temp.getMax();
    }, 'no temperatures added');
  });

  it('should return the highest temperature', () => {
    temp.insert(5);

    assert.equal(temp.getMax(), 5);
  });

  it('should update highest temperature', () => {
    temp.insert(55);
    temp.insert(-100);

    assert.equal(temp.getMax(), 55);
  });
});

describe('#getMin()', () => {
  let temp = new TemperatureTracker();
  it('should throw and error if no temperatures are added', () => {
    assert.throws(() => {
      temp.getMin();
    }, 'no temperatures added');
  });

  it('should return the lowest temperature', () => {
    temp.insert(5);

    assert.equal(temp.getMin(), 5);
  });

  it('should update lowest temperature', () => {
    temp.insert(55);
    temp.insert(-100);

    assert.equal(temp.getMin(), -100);
  });
});

describe('#getMean()', () => {
  let temp = new TemperatureTracker();
  it('should throw and error if no temperatures are added', () => {
    assert.throws(() => {
      temp.getMean();
    }, 'no temperatures added');
  });

  it('should return the mean of all temperatures with 2 decimals', () => {
    temp.insert(10);
    temp.insert(20);
    temp.insert(19);

    assert.equal(temp.getMean(), 16.33);
  });
});

describe('#getMode()', () => {
  let temp = new TemperatureTracker();
  it('should throw and error if no temperatures are added', () => {
    assert.throws(() => {
      temp.getMode();
    }, 'no temperatures added');
  });

  it('should return the most often occuring temperature', () => {
    temp.insert(5);
    temp.insert(10);
    temp.insert(5);

    assert.equal(temp.getMode(), 5);
  });

  it('should properly update mode', () => {
    temp.insert(3);
    temp.insert(3);
    temp.insert(3);

    assert.equal(temp.getMode(), 3);
  });
});
