/**
 * Object.keys() Method
 */

const courses = {
    java: 10,

    javascript: 55,

    nodejs: 5,

    php: 15,
};

// convert object to key's array

const keys = Object.keys(courses);

// print all keys

console.log(keys);

// [ 'java', 'javascript', 'nodejs', 'php' ]

// iterate over object

keys.forEach((key, index) => {
    console.log(`${key}: ${courses[key]}`);
});

// java: 10

// javascript: 55

// nodejs: 5

// php: 15
