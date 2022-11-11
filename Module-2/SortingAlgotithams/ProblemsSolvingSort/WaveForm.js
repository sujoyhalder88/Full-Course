/**
 * Given an array which is unsorted ,we need to sort the array into wave like array where
    arr[0]>arr[1]<=arr[2]>=arr[3]<=arr[4]>=arr[5].......
    Input:{9,8,7,6,5,21,2,4}
    Output:{4,2,6,5,8,7,21,9}
 */

function arrayInWave(arr) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  if (n > 1) {
    for (let i = 1; i < n; i += 2) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
    return arr;
  } else {
    return arr;
  }
}
console.log(arrayInWave([9, 8, 7, 6, 5, 21, 2, 4]));
