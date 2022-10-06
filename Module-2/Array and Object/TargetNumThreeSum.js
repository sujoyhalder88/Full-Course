/** Target Sum Triplet in an Array
 *  Given an array A with a number x. We need to write a function which takes array A and x as argument and return a triplet from
	the array A whose sum is equal to x. If no pair exists then return empty array.
	Example :
	Input: {0,1,2,-2,4,5,6}
	Sum = 7
	Output: {0,1,6}
	There are many approaches to solve this problem

	Time Complexity: O(N^2)
	Space Complexity: O(N)

 */

function tripleSum(arr, target) {
    let mp = [];
    for (let i = 0; i < arr.length - 2; i++) {
        let ans = new Set();

        for (let j = i + 1; j < arr.length; j++) {
            let remder = target - arr[i] - arr[j];
            if (ans.has(remder)) {
                mp.push(arr[i]);
                mp.push(arr[j]);
                mp.push(target - arr[i] - arr[j]);
                return mp;
            } else {
                ans.add(arr[j]);
            }
        }
    }
    return mp;
}
console.log(tripleSum([0, 1, 2, -2, 4, 5, 6], 11));
