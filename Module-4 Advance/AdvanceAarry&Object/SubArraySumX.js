/**
 *  Subarray with sum x
 * 
 * Problem – Given an array having positive and negative numbers. You need to find a number of subarrays having sum
 * 
    as x. For example –

    Input – {2, 4, -1, -2, 4, -5, 5}, sum = 6

    Output –
    Index 0 to 1

 */

function sumArraySumX(arr, sum) {
  let currentSum = 0;
  let start = 0;
  let end = -1;
  let mp = new Map();
  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];

    if (currentSum - sum == 0) {
      start = 0;
      end = i;
      break;
    }
    if (mp.has(currentSum - sum)) {
      start = mp.get(currentSum - sum) + 1;
      end = i;
      break;
    }
    mp.set(currentSum, i);
  }
  if (end == -1) {
    console.log(`No subarray with given sum exists`);
  } else {
    console.log(
      `Subarray having sum between indexes +  ${start} + " to " +  ${end}`
    );
  }
}
sumArraySumX([2, 4, -1, -2, 4, -5, 5], 0);
