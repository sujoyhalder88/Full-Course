/**
 * Suppose we’ve given an array of elements. Let's name the array as input array.Input Array
 *  
 * input: [4,5,6,2,3,9]
   Output:[3 index 4]
 */

// function search(arr) {
//   arr.filter((curr, index) => (curr == 3 ? console.log(curr, index) : null));
// }
// search([4, 5, 6, 2, 3, 9]);

function linerSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return `${key} index is ${i}`;
    }
  }
  return -1;
}
console.log(linerSearch([4, 5, 6, 2, 3, 9], 3));
