/**
 * Find element that occurs once in the array where rest of the element appear twice
   Given an array where every element appears twice leaving one of the element.We need to find the element which
	appears once in the array.
	Example:
	Input: {4,3,5,6,7,7,6,5,3}
	Output: 4
 */

// function findSingleOccurence(arr) {
// 	/**
// 	 * time:O(n)
// 	 * space:O(1)
// 	 */
//     let mp = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (!mp[arr[i]]) {
//             mp[arr[i]] = 1;
//         } else {
//             mp[arr[i]] += 1;
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (mp[arr[i]] == 1) {
//             return arr[i];
//         }
//     }
//     return -1;
// }
// console.log(findSingleOccurence([4, 3, 5, 6, 7, 7, 6, 5, 3]));

//===============================================

function findSingleOccurence(arr) {
    /**
     * time:O(n)
     * space:O(1)
     */
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result ^ arr[i];
    }
    return result;
}
console.log(findSingleOccurence([4, 3, 5, 6, 7, 7, 6, 5, 3]));
