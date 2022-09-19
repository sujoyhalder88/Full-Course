/**
 * Given an array having 0,1 as input. We need to write a function that sorts the array in ascending order without using
	inbuilt sort function
	Expected time complexity :O(n)
	Expected space complexity:O(1)
	Example:
	Input: {0, 1, 1,0, 0, 1}
	Output: {0, 0, 0, 1, 1, 1}
	Input: {0,0,1,1,0,1,0}
	Output: {0,0,0,0,1,1,1}
 */

function sortArray(arr, n) {
    let mid = 0;
    let end = n - 1;
    let swap = 0;
    while (mid <= end) {
        if (arr[mid] == 0) {
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
let arr = [0, 1, 1, 0, 0, 1];
let n = arr.length;
console.log(sortArray(arr, n));
