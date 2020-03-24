const Juice = require("./Juice");

class OrangeJuice extends Juice {
  constructor() {
    super();
    this.name = "OJ";
    this.price = 200;
  }

  returnPrice() {
    return this.price;
  }
}

module.exports = OrangeJuice;
