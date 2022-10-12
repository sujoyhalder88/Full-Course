/**
 * Write a program to find the particular element in an array using find function. (Input array:
	[‘a’, ‘b’, ‘c’, ‘z’, ‘h’]) find ‘c’

 */
const arr = ["a", "b", "c", "z", "h"];
const found = arr.find((arr) => arr === "h");
console.log(found);
