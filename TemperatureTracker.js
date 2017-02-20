class TemperatureTracker{
  constructor(num = 35){
    this.temp = num;
  }

  getTemp() {
    return this.temp;
  }
}

module.exports = TemperatureTracker;
