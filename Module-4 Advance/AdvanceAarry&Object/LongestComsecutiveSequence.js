/**
 * Longest consecutive sequence – A sequence having elements as consecutive integers. Consecutive integers can be in any order.
   
    Problem – Given an array. You need to find the length of the longest consecutive sequence such that elements are

    consecutive integers. For example –

    Input – {35, 3, 4, 88, 9, 10, 21, 5, 6}

    Output – 4
    Sequence is 3,4,5,6

 */

function longestConsecutiveSequence(arr) {
  let hashSet = new Set();
  let result = 0;
  //Hash all the array elements
  for (let i = 0; i < arr.length; i++) hashSet.add(arr[i]);
  // check each possible sequence from the start then update optimal length
  for (let i = 0; i < arr.length; i++) {
    // if current element is the starting element of a sequence
    if (!hashSet.has(arr[i] - 1)) {
      // Then check for next elements in the sequence
      let j = arr[i];
      while (hashSet.has(j)) j++;

      // update optimal length if  this length is more
      result = Math.max(result, j - arr[i]);
    }
  }
  return result;
}
console.log(longestConsecutiveSequence([35, 3, 4, 88, 9, 10, 21, 5, 6]));
