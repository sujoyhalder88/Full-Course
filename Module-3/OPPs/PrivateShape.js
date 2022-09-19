/**
 * Write a program to define a class “Shape”. This class will have the private
	properties length, breadth and height. Create setter and getter methods for all
	the private properties. Define a method area() inside the class and it should return
	value as length*breadth*height.Create an Object of shape class and call the area()
	method to fetch the area
 */

class privateShape {
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
        let value = this.getLength() * this.getBreadth() * this.gettHeight();
        console.log(value);
    }
}

let totalArea = new privateShape();
totalArea.setBreadth(10);
totalArea.setLength(15);
totalArea.setHeight(20);
totalArea.area();
