/**
 * Program to demonstrate destructuring in nested Array
 */

let number = [[1, 2, 3], 4, 5, [6], 7, 8, [9]];
// De structuring array
const [a, b, c, ...d] = number;
// De structuring the nested array
const [x, y, z] = d;
console.log(x);
console.log(z);
