/**
 * Given an array of non negative integers representing the height of each block where
	the width of each block is 1, we need to find out maximum rain water that can be
	trapped using blocks.


	Example:
	Input: {3,0,3}
	Output: 3 as three units of water can be stored between this two blocks.
	Approach: There are many approaches for this problem. Will discuss each one of
	them one by one.
 */

function rainStore(arr) {
    let result = 0;
    let n = arr.length;
    let max_left = 0;
    let max_right = 0;
    let low_height = 0;
    let high_height = n - 1;

    while (low_height < high_height) {
        if (arr[low_height] < arr[high_height]) {
            if (max_left < arr[low_height]) max_left = arr[low_height];
            result += max_left - arr[low_height];
            low_height++;
        } else {
            if (max_right < arr[max_right]) max_right = arr[high_height];
            result += max_right - arr[high_height];
            high_height--;
        }
    }
    return result;
}
console.log(rainStore([3, 0, 2, 0, 4]));

console.log(rainStore([3, 0, 3]));
