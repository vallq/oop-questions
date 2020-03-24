const Figure = require("./Figure");

class Circle extends Figure {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateSurfaceArea = () => {
    return Math.PI * this.radius * this.radius;
  };

  calculatePerimeter = () => {
    return Math.PI * (2 * this.radius);
  };
}

module.exports = Circle;
