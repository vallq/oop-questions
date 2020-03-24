const Figure = require("./Figure");

class Triangle extends Figure {
  constructor(base, height) {
    super();
    this.base = base,
    this.height = height
  }
  calculateSurfaceArea = () => {
    return 0.5 * this.base * this.height;
  };
  calculatePerimeter = () => {
    let hypothenuse = Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.height, 2));
    return 2 * hypothenuse + this.base;
  };
}

module.exports = Triangle;