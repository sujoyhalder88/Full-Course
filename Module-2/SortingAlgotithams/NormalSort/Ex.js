/**
 * The idea behind this algorithm is to check the order of the elements in the input array. It compares
    two adjacent elements and checks if they are in the correct order (ascending or descending). If they
    are not in order, the elements are swapp

    Let's consider an array of size 4. Array = [5, 3, 1, 2 ]

 */
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var isSwapp = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapp = true;
      }
    }
    if (!isSwapp) break;
  }
  return arr;
}

console.log(sort([5, 3, 1, 2]));
