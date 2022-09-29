/**
 *  Given an array A with a number x. We need to write a function which takes array A and x as argument and return a pair
	from the array A whose sum is equal to x. If no pair exists then return empty array.
	Example :
	Input: {0,1,2,-2,4,5,6}
	Sum = 5
	Output: {1,4}
	There are many approaches to solve this problem

 */
function targetSum(arr, sum) {
    arr.sort((a, b) => a - b);
    let leftSide = 0;
    let rightSide = arr.length - 1;
    let occur = [];
    while (leftSide < rightSide) {
        if (arr[leftSide] + arr[rightSide] < sum) {
            leftSide++;
        } else if (arr[leftSide] + arr[rightSide] > sum) {
            rightSide--;
        } else {
            occur.push(arr[leftSide]);
            occur.push(arr[rightSide]);
            return occur;
        }
    }
    return occur;
}
let arr = [0, 1, 2, -2, 4, 5, 6];
let sum = 8;
console.log(targetSum(arr, sum));
