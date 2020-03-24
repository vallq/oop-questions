const Figure = require("./Figure");

class Rectangle extends Figure {
  constructor(length, height) {
    super();
    this.length = length;
    this.height = height;
  }

  calculateSurfaceArea = () => {
    return this.length * this.height;
  };

  calculatePerimeter = () => {
    return 2 * (this.length + this.height);
  };
}

module.exports = Rectangle;