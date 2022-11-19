/**
 *  Gobal Liner Search
 */
function globalLinearSearch(arr, key) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      results.push(i);
    }
  }
  // If results array is empty, return -1
  if (!results) {
    return -1;
  }

  return results;
}
console.log(globalLinearSearch([4, 5, 6, 2, 3, 9], 3));
