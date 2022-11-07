/**
 *  implement Recursive  Marge Sort
 */

function margeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = margeSort(arr.slice(0, mid));
  let right = margeSort(arr.slice(mid));
  return marge(left, right);
}
function marge(left, rigth) {
  let sorted = [];
  while (left.length && rigth.length) {
    if (left[0] < rigth[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(rigth.shift());
    }
  }
  return sorted.concat(left.slice().concat(rigth.slice()));
}
marge([14, 8, 25, 27], [15, 10, 9, 39, 45]);

console.log(margeSort([14, 8, 25, 27, 15, 10, 9, 39, 45]));
