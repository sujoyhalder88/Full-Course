/**
 * Write a program array containing string and sort the string array in descending order. (Input
	array: [‘a’, ‘b’, ‘c’, ‘z’, ‘h’])
 */

let arr = ["a", "b", "c", "z", "h"];
let ans = arr.sort((a, b) => b.localeCompare(a));
console.log(ans);
