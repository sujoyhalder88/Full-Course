/**
 * Object.create method

 */

const Laptop = {
    name: "DELL",
    memory: [512, 780],
    color: "Blue",
    prize: 50000,
    cores: 8,
};

let myLaptop = Object.create(Laptop);
console.log(myLaptop);
