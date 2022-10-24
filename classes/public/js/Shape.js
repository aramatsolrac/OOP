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
    function Rectangle(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    Rectangle.prototype.getArea = function () {
        return this.length * this.breadth;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.length + this.breadth);
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
    function Trapezoid(length, breadth, height) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
    Trapezoid.prototype.getArea = function () {
        return 0.5 * (this.length + this.breadth) * this.height;
    };
    Trapezoid.prototype.getPerimeter = function () {
        return 2 * (this.length + this.breadth);
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
console.log(calculateAreaPerimeter(circle)); // 314.1592653589793
console.log(calculateAreaPerimeter(rectangle)); // 260
console.log(calculateAreaPerimeter(triangle)); // 160
console.log(calculateAreaPerimeter(trapezoid)); // 510
