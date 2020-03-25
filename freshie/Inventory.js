class Inventory {
  constructor() {
    this.numberOfOranges = 0;
    this.numberOfCups = 0;
  }

  addOranges(numOfOranges) {
    this.numberOfOranges += numOfOranges;
  }

  removeOneOrange() {
    this.numberOfOranges -= 1;
  }

  returnNumberOfOranges() {
    return this.numberOfOranges;
  }

  hasOranges() {
    if (this.numberOfOranges > 0) {
      return true;
    }
    return false;
  }

  addCups(numOfCups) {
    this.numberOfCups += numOfCups;
  }

  removeOneCup() {
    this.numberOfCups -= 1;
  }

  returnNumberOfCups() {
    return this.numberOfCups;
  }

  hasCups() {
    if (this.numberOfCups > 0) {
      return true;
    }
    return false;
  }
}

module.exports = Inventory;
