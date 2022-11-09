function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}
function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)]; //middle element
  let start = left; //left pointer
  let end = right; //right pointer
  while (start <= end) {
    while (arr[start] < pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }
    if (start <= end) {
      swap(arr, start, end); //sawpping two elements
      start++;
      end--;
    }
  }
  return start;
}

function quickSort(arr, left, right) {
  let newarr;
  if (arr.length > 1) {
    newarr = partition(arr, left, right); //index returned from partition
    if (left < newarr - 1) {
      //more elements on the left side of the pivot
      quickSort(arr, left, newarr - 1);
    }
    if (newarr < right) {
      //more elements on the right side of the pivot
      quickSort(arr, newarr, right);
    }
  }
  return arr;
}
var arr = [8, 4, 3, 6, 2, 8, 1, 7];
// first call to quick sort
var sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
