const Circle = require("./Circle");
const Rectangle = require("./Rectangle");
const Triangle = require("./Triangle");

const myCircle = new Circle(5);
const myRect = new Rectangle(5, 10);
const myTriangle = new Triangle(4, 10);
console.log(
  "my Circle has surface area of: " + myCircle.calculateSurfaceArea()
);
console.log("my Circle has perimeter of: " + myCircle.calculatePerimeter());
console.log(
  "my Rectangle has surface area of: " + myRect.calculateSurfaceArea()
);
console.log("my Rectangle has perimeter of: " + myRect.calculatePerimeter());
console.log(
  "my Triangle has surface area of: " + myTriangle.calculateSurfaceArea()
);
console.log("my Triangle has perimeter of: " + myTriangle.calculatePerimeter());
