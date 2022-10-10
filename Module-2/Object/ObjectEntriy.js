/**
 *    Object.entries() Method
 */

const animals = {
    tiger: 1,

    cat: 2,

    monkey: 3,

    elephant: 4,
};

const entries = Object.entries(animals);
console.log(entries);

// [ [ 'tiger', 1 ],

//   [ 'cat', 2 ],

//   [ 'monkey', 3 ],

//   [ 'elephant', 4 ] ]

// `for...of` loop
for (const [key, value] of Object.entries(animals)) {
    console.log(`${key}: ${value}`);
}

// `forEach()` method

Object.entries(animals).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
