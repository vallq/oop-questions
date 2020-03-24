class VendingMachine {
  constructor() {
    this.juicePrice = 200;
    this.accumulatedSum = 0;
    this.coinsArray = [];
    this.notesArray = [];
    this.juiceType = "";
    this.changeToDispense = 0;
    this.returnOutput = [];
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

  receiveJuiceTypeAndCash(juice, coins, notes) {
    this.addCoins(coins);
    this.addNotes(notes);
    this.checkTotalCash();
    this.juiceToDispense(juice);
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
  juiceToDispense(juice) {
    this.juiceType = juice;
  }

  addJuiceToOutput() {
    this.returnOutput.push(this.juiceType);
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
}

module.exports = VendingMachine;