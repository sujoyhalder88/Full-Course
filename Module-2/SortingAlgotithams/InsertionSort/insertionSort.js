/**
 *
 */

// function insertionSort(inputArr) {
//   let n = inputArr.length;
//   for (let i = 1; i < n; i++) {
//     // Choosing the first element of the unsorted array
//     let current = inputArr[i];
//     // The last element of our sorted subarray
//     let j = i - 1;

//     // Find the position of the element in the sorted subarray
//     while (j > -1 && current < inputArr[j]) {
//       inputArr[j + 1] = inputArr[j];
//       j--;
//     }

//     inputArr[j + 1] = current;
//   }
//   return inputArr;
// }
// console.log(insertionSort([15, 12, 31, 14, 14, 17]));

//=============================================

function implementInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let newArray = arr[i];
    let j = i - 1;
    while (j > -1 && newArray < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = newArray;
  }
  return arr;
}
console.log(implementInsertionSort([25, 14, 30, 17, 48, 50]));
