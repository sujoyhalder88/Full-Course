/**
 * Given an array of integers.We need to find the minimum number of moves where move is you can choose any element of
    array and increment it by 1 to make every element in the array unique
    Input:[1,3,3]
    Output:After incrementing one of the 3 to four ,all the elements in the array will be unique,so output is 1

 */
let nums = [3, 2, 1, 2, 1, 7];

function makeUnique(nums) {
  let maxVal = 0;
  let map1 = {};
  for (let i = 0; i < nums.length; i++) {
    maxVal = Math.max(maxVal, nums[i]);
    if (!map1[nums[i]]) {
      map1[nums[i]] = 0;
    }
    map1[nums[i]]++;
  }
  console.log(map1);
  let move = 0;
  let taken = 0;
  for (let x = 0; x < nums.length + maxVal; x++) {
    if (map1[x] >= 2) {
      taken += map1[x] - 1;
      move -= x * (map1[x] - 1);
    } else if (taken > 0 && !map1[x]) {
      taken--;
      move += x;
    }
  }
  return move;
}
console.log(makeUnique(nums));
