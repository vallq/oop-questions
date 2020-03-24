const OrangeJuice = require("./OrangeJuice");
const CoconutWater = require("./CoconutWater");

class VendingMachine {
  constructor() {
    this.coinsArray = [];
    this.notesArray = [];
    this.accumulatedSum = 0;
    this.changeToDispense = 0;
    this.juiceType = "";
    this.juicePrice = 0;
    this.returnOutput = [];
  }

  receiveJuiceTypeAndCash(juice, coins, notes) {
    this.addAllCash(coins, notes);
    this.setJuiceTypeAndPrice(juice);
    this.checkTotalCash();
    this.addFinalOutput();
  }

  addFinalOutput() {
    if (this.changeToDispense > 0) {
      this.addJuiceToOutput();
      this.addChangeToOutput();
    } else {
      this.addJuiceToOutput();
    }
  }
  
  sendOutput() {
    return this.returnOutput;
  }

  setJuiceTypeAndPrice(juice) {
    this.juiceType = juice;
    this.juicePrice = this.retrieveJuicePrice(juice);
  }

  retrieveJuicePrice(juice) {
    let chosenJuice;
    switch (juice) {
      case "OJ":
        chosenJuice = new OrangeJuice();
        return chosenJuice.returnPrice();

      case "CW":
        chosenJuice = new CoconutWater();
        return chosenJuice.returnPrice();
    }
  }

  addJuiceToOutput() {
    this.returnOutput.push(this.juiceType);
  }

  addAllCash(coins, notes) {
    this.addCoins(coins);
    this.addNotes(notes);
  }

  addCoins(coins) {
    coins.forEach(coin => {
      this.coinsArray.push(coin);
      this.accumulatedSum += coin;
    });
  }

  addNotes(notes) {
    notes.forEach(note => {
      this.notesArray.push(note);
      this.accumulatedSum += note;
    });
  }

  checkTotalCash() {
    if (this.accumulatedSum >= this.juicePrice) {
      this.changeToDispense = this.accumulatedSum - this.juicePrice;
      this.addChangeToOutput;
    } else {
      const requiredCash = this.juicePrice - this.accumulatedSum;
      return requiredCash;
    }
  }

  addChangeToOutput() {
    const allDenominations = [500, 200, 100, 50, 20, 10];
    let changeArray = [];
    let changeToDispense = this.changeToDispense;

    allDenominations.forEach(denom => {
      if (changeToDispense >= denom) {
        let numberOfDenom = Math.floor(changeToDispense / denom);
        for (let i = 0; i < numberOfDenom; i++) {
          changeArray.push(denom);
        }
        changeToDispense -= numberOfDenom * denom;
      }
    });

    changeArray.forEach(change => this.returnOutput.push(change));
  }

  printVendingMachineDetails() {
    console.log(
      "sum:",
      this.accumulatedSum,
      "coins:",
      this.coinsArray,
      "notes:",
      this.notesArray,
      "change:",
      this.changeToDispense,
      "output",
      this.returnOutput
    );
  }
}

module.exports = VendingMachine;
