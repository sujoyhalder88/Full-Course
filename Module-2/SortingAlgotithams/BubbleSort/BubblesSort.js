/**
 *  bubble sorts
 */

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log(`iteration ${i + 1} :`, arr);
//   }
//   return arr;
// }

// console.log(bubbleSort([5, 3, 1, 2]));

//============================================================
function bubblesSortAllElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(`iteration ${i + 1}:`, arr);
  }
  return arr;
}
console.log(bubblesSortAllElement([1, 4, 2, 5, -2, 3]));
