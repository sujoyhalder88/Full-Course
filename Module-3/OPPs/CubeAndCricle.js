/**
 * Write a program that contains Cube class and Circle class. These classes should
	inherit the Shape class. Set the properties value if required using constructor and
	override the area() method (if required) to return the area of Cube and Circle 
 */

class Shape {
    #length;
    #breadth;
    #height;

    setLength(length) {
        this.#length = length;
    }

    getLength() {
        return this.#length;
    }

    setBreadth(breadth) {
        this.#breadth = breadth;
    }

    getBreadth() {
        return this.#breadth;
    }

    setHeight(height) {
        this.#height = height;
    }

    gettHeight() {
        return this.#height;
    }

    area() {
        return this.getLength() * this.getBreadth() * this.gettHeight();
    }
}

class Cube extends Shape {
    constructor(length, breadth, height) {
        super();
        this.setLength(length);
        this.setBreadth(breadth);
        this.setHeight(height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.setLength(radius);
    }
    area() {
        return 3.14 * this.getLength() * this.getLength();
    }
}
let cube = new Cube(2, 3, 4);
console.log(cube.area());

let circle = new Circle(3);
console.log(circle.area());
