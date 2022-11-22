/**
 * Given a sorted array and an element X, check if the element is repeated.

    Example: [1,2,3,3,4,5,5,6,7,7,8,8,8,9,11,13,13] , X = 13 → ans yes

    * Time: O(logn)
    * Space: O(1)

 */
function checkRepeatedElement(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == x) return true;
    if (arr[mid] > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
console.log(
  checkRepeatedElement(
    [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 11, 13, 13],
    13
  )
);
