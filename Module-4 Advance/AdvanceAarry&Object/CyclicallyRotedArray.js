/**
 * Cycle Rotation – Cycle rotation is the rotation in which one rotation moves the last element of an array to the first
    place and shifts the remaining elements to the right.
    Problem – Given an array. You need to shift all elements to the right by 1 and finally cyclically rotate whole array. For
    example –
    Input – { 3, 88, 21, 5, 6}
    Output – { 6,3, 88, 21, 5}

 */

function cyclicallyRotadeArray(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i != j) {
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i = i + 1;
  }
  return arr;
}
console.log(cyclicallyRotadeArray([3, 88, 21, 5, 6]));
