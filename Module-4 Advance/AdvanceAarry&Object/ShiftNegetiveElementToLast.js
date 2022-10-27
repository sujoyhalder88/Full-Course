/**
 * Problem Given an array. You need to shift negative elements to the end of an array. For example –
    Input – { -5, 3, -4, 88, -9, -10, 21, 5, 6}
    Output – { 3, 88, 21, 5, 6, -5, -4, -9, -10 }
 */

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function shiftNegetiveElementToEnd(arr) {
  let i = 0;
  let j = arr.length - 1;
  let k = 0;
  while (k <= j) {
    if (arr[k] < 0) {
      swap(arr, k, j);
      j--;
    } else {
      i++;
      k++;
    }
  }
}
let arr = [-5, 3, -4, 88, -9, -10, 21, 5, 6];
shiftNegetiveElementToEnd(arr);
console.log(arr);
