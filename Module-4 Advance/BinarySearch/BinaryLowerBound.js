/**
 * Given an array of integers, arranged in ascending order
    (sorted). Also given an element x, find the index of the first
    element greater than or equal to x. (LOWER BOUND) - HW


    Example: [1,2,3,3,4,5,6,6,6,7] x = 3, ans - index 2

    [1,2,3,3,4,6,6,6,7] x = 5, ans - index 5
 */
function lowerBound(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let result = arr.length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= x) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}
console.log(lowerBound([1, 2, 3, 3, 4, 5, 6, 6, 6, 7], 5));
