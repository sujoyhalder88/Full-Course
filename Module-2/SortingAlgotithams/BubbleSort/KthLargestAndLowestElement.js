/**
 * We can modify our bubble sort algorithm to detect the kth largest or smallest
    element in a sorted array.
    To do so we just need to update the outer loop by making it run only k number of
    times and then take the kth last element of the array that we got after kth iteration.

    So if in array [5,4,3,2,1,6,2] i have to find the 3rd largest element then
 */

function kthElement(inputArray, k) {
  for (let i = 0; i < k; i++) {
    let isSwap = false;
    for (let j = 0; j < inputArray.length - i - 1; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        let temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return inputArray;
}
let arr = [5, 4, 3, 2, 1, 6, 2];
let k = 3;
arr = kthElement(arr, k);
console.log(arr);
console.log(arr[arr.length - k]);
