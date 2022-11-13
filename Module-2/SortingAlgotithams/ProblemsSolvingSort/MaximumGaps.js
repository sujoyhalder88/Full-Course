/**
 * Given an array of integers we need to find the maximum difference between two consecutive elements when the array is
    sorted in ascending order
    Example:
    Input:[2,4,7,9,1,15]
    Output:6
    If the array is sorted it would have elements as
    [1,2,4,7,9,15] and the maximum difference is (15-9) which is 6.

 */

function maximumDifference(arr) {
  arr.sort((a, b) => a - b);
  let maxDiff = 0;
  for (let i = 0; i < arr.length; i++) {
    let distance = arr[i] - arr[i - 1];
    maxDiff = distance > maxDiff ? distance : maxDiff;
  }
  return maxDiff;
}
console.log(maximumDifference([2, 4, 7, 9, 1, 15]));
