/**
 * Given an array having 0,1,2. We need to write a function that sorts the array in ascending order without using inbuilt sort
	function
	Expected time complexity :O(n)
	Expected space complexity:O(1)
	Example:
	Input: {0, 1, 2, 2, 1, 2}
	Output: {0, 1, 1, 2, 2, 2}
	Input: {2,2,1,0,0,1,2,2}
	Output: {0,0,1,1,2,2,2,2}
 */
function ThreeNumberSort(arr, n) {
    let start = 0;
    let mid = 0;
    let end = n - 1;
    let swap = 0;
    while (mid <= end) {
        if (arr[mid] == 0) {
            swap = arr[start];
            arr[start] = arr[mid];
            arr[mid] = swap;
            mid++;
            start++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            swap = arr[end];
            arr[end] = arr[mid];
            arr[mid] = swap;
            end--;
        }
    }
    return arr;
}
let arr = [0, 1, 2, 2, 1, 2];
let n = arr.length;
console.log(ThreeNumberSort(arr, n));
