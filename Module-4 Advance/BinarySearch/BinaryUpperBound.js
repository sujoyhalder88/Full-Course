/**
 *  Binary Upper Bound
 * 
    * Given an array of integers, arranged in ascending order (sorted). Also
    given an element x, find the index of the first element greater than x.
    (UPPER BOUND)

 */

function upperBound(arr, x) {
  let start = 0,
    end = arr.length - 1;
  let ans = arr.length;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] <= x) {
      // discard left half
      start = mid + 1;
    } else {
      // element at mid can be a potential answer
      ans = mid;
      end = mid - 1; // go and find something even better on left side
    }
  }
  return ans;
}

console.log(upperBound([1, 2, 3, 3, 3, 4, 5, 5, 6, 7], 5));
