class TemperatureTracker{
  constructor(num = 35){
    this.temp = num;
  }

  getTemp() {
    return this.temp;
  }
}

let temp = new TemperatureTracker(26374);
console.log(temp.getTemp());
