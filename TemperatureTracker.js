class TemperatureTracker{
  constructor(){
    this.maxTemp;
    this.minTemp;
    this.allTemps = {};
    this.tempSums;
    this.totalTemps;
    this.modeTemp;
    this.modeTempOccurance;
  }

  getMax(){
    if (!this.maxTemp){
      throw new Error ('no temperatures added');
    }

    return this.maxTemp;
  }

  getMin(){
    if (!this.maxTemp){
      throw new Error ('no temperatures added');
    }

    return this.minTemp;
  }

  getMean(){
    if (!this.maxTemp){
      throw new Error ('no temperatures added');
    }

    return Math.round((this.tempSums / this.totalTemps) * 100) / 100;
  }

  getMode(){
    if (!this.maxTemp){
      throw new Error ('no temperatures added');
    }
    
    return this.modeTemp;
  }

  insert(newTemp){
    // checks for valid entry
    if (typeof(newTemp) !== 'number'){
      throw new Error ('invalid entry');
    }
    // taking care of mean
    if (!this.tempSums){
      this.tempSums = newTemp;
      this.totalTemps = 1;
    } else {
      this.tempSums += newTemp;
      this.totalTemps += 1;
    }

    // taking care of min and max
    if (!this.maxTemp){
      this.maxTemp = newTemp;
      this.minTemp = newTemp;
    }
    if (newTemp > this.maxTemp){
      this.maxTemp = newTemp;
    }
    if (newTemp < this.minTemp){
      this.minTemp = newTemp;
    }

    // taking care of insert and mode
    if (!this.allTemps[newTemp]){
      this.allTemps[newTemp] = 1;
      if (!this.modeTemp){
        this.modeTemp = newTemp;
        this.modeTempOccurance = 1;
      }
    } else {
      this.allTemps[newTemp] += 1;
      if (this.modeTempOccurance < this.allTemps[newTemp]){
        this.modeTemp = newTemp;
        this.modeTempOccurance = this.allTemps[newTemp];
      }
    }
  }
}

module.exports = TemperatureTracker;
