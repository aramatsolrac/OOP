interface iShape {
    getArea(): number;
    getPerimeter(): number;
}

class Circle implements iShape {
    public radius: number;

    public constructor(radius: number) {
        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements iShape {
    public length: number;
    public width: number;

    public constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    public getArea(): number {
        return this.length * this.width;
    }

    public getPerimeter(): number {
        return 2 * (this.length + this.width);
    }
}

class Triangle implements iShape {
    public base: number;
    public height: number;

    public constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    public getArea(): number {
        return 0.5 * this.base * this.height;
    }

    public getPerimeter(): number {
        return 2 * (this.base + this.height);
    }
}

class Trapezoid implements iShape {
    public length: number;
    public width: number;
    public height: number;

    public constructor(length: number, width: number, height: number) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    public getArea(): number {
        return 0.5 * (this.length + this.width) * this.height;
    }

    public getPerimeter(): number {
        return 2 * (this.length + this.width);
    }
}



const circle = new Circle(10);
const rectangle = new Rectangle(10, 20);
const triangle = new Triangle(10, 20);
const trapezoid = new Trapezoid(10, 20, 30);

function calculateAreaPerimeter(shape: iShape) {
    return {
        Area: shape.getArea(),
        Perimeter: shape.getPerimeter()
    }
}

console.log(calculateAreaPerimeter(circle)); // { Area: 314.1592653589793, Perimeter: 62.83185307179586 }
console.log(calculateAreaPerimeter(rectangle)); // { Area: 200, Perimeter: 60 }
console.log(calculateAreaPerimeter(triangle)); // { Area: 100, Perimeter: 50 }
console.log(calculateAreaPerimeter(trapezoid)); // { Area: 450, Perimeter: 60 }

// command line: tsc && node public/js/Shape.js
