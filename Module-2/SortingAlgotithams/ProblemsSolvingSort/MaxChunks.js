/**
 * Given an array of length n having elements in the range [0,n-1] in any order.We have to split the array into maximum
    number of chunks and sort each chunk and concatenate them which should return a complete sorted array.Find the
    maximum number of chunks that can be made
    Example

    Input:[1,0,4,3,2]
    Output:2

 */

function maxChanks(arr) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max == i) {
      count++;
    }
  }
  return count;
}
console.log(maxChanks([1, 0, 4, 3, 2]));
