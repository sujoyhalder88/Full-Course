/**
 *Let's consider an array of size 4. Array = [5, 3, 1, 2 ]

 */

function selectionSort(inputArray) {
  var i, j, minimumIndex;

  for (i = 0; i < inputArray.length - 1; i++) {
    // Initialize the current element as minimumIndex
    minimumIndex = i;
    for (j = i + 1; j < inputArray.length; j++) {
      if (inputArray[j] < inputArray[minimumIndex]) {
        minimumIndex = j;
      }
    }
    // Swap the found minimum element with the current element
    if (minimumIndex != i) {
      var temp = inputArray[minimumIndex];
      inputArray[minimumIndex] = inputArray[i];
      inputArray[i] = temp;
    }
  }
  return inputArray;
}
console.log(selectionSort([5, 3, 1, 2]));

//======================================================

function sSort(arr) {
  let i;
  let j;
  let minIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
console.log(sSort([14, 15, 6, 5, 14, 1]));
