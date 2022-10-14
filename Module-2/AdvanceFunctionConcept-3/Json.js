/**
 *  For the given Json Object print the first name of the student
 */

let student = {
    roll: 12,
    id: 12,
    first_name: "roky",
    last_name: "Roy",
    PH_no: 9999999999,
};

// console.log(student.first_name);

/**
 *  Create a JSON object and print all of its objects using properties
 */

let cars = [
    {
        brand_name: "BMW",
        model_name: "x3",
    },
    {
        brand_name: "BMW",
        model_name: "x4",
    },
    {
        brand_name: "Audi",
        model_name: "A10",
    },
    {
        brand_name: "Audi",
        model_name: "A11",
    },
];

for (let car of cars) {
    console.log(car.brand_name + " " + car.model_name + "\n");
}
