var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.length + this.width);
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.getArea = function () {
        return 0.5 * this.base * this.height;
    };
    Triangle.prototype.getPerimeter = function () {
        return 2 * (this.base + this.height);
    };
    return Triangle;
}());
var Trapezoid = /** @class */ (function () {
    function Trapezoid(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    Trapezoid.prototype.getArea = function () {
        return 0.5 * (this.length + this.width) * this.height;
    };
    Trapezoid.prototype.getPerimeter = function () {
        return 2 * (this.length + this.width);
    };
    return Trapezoid;
}());
var circle = new Circle(10);
var rectangle = new Rectangle(10, 20);
var triangle = new Triangle(10, 20);
var trapezoid = new Trapezoid(10, 20, 30);
function calculateAreaPerimeter(shape) {
    return {
        Area: shape.getArea(),
        Perimeter: shape.getPerimeter()
    };
}
console.log(calculateAreaPerimeter(circle)); // { Area: 314.1592653589793, Perimeter: 62.83185307179586 }
console.log(calculateAreaPerimeter(rectangle)); // { Area: 200, Perimeter: 60 }
console.log(calculateAreaPerimeter(triangle)); // { Area: 100, Perimeter: 50 }
console.log(calculateAreaPerimeter(trapezoid)); // { Area: 450, Perimeter: 60 }
// command line: tsc && node public/js/Shape.js
