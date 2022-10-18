/**
 * SubSequence: May not be contiguous but maintain the relative order.
	Elements in the subsequence appear in the same order as they appear in the original array the only difference is that
	they may not be contiguous
	The recursion tree for the array [1,2,3] is

	outPut:[1],[2],[3],[1,2,3],[2,3],[1,2],[1,3]

	[ 3 ],[ 2 ],[ 2, 3 ],[ 1 ],[ 1, 3 ],[ 1, 2 ],[ 1, 2, 3 ]

 */

function subsequence(arr, index, result) {
    if (index === arr.length) {
        if (result.length > 0) console.log(result);
    } else {
        subsequence(arr, index + 1, result);
        result.push(arr[index]);
        subsequence(arr, index + 1, result);
        result.pop();
    }
    return;
}
let arr = [1, 2, 3];
let result = new Array();
subsequence(arr, 0, result);
