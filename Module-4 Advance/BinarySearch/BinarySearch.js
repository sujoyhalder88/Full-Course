/**
 *  here are create a basic  Binery Search implement
 */
function binerySearch(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return undefined;
}
console.log(binerySearch([4, 3, 2, 1, 5, 6, 8, 9, 15], 5));
