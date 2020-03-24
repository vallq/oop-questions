const Juice = require("./Juice");

class CoconutWater extends Juice {
  constructor() {
    super();
    this.name = "CW";
    this.price = 350;
  }

  returnPrice() {
    return this.price;
  }
}

module.exports = CoconutWater;
