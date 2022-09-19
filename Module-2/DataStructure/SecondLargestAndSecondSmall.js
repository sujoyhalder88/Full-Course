/**
 * Program to find the second largest and second smallest number in a
	given array.[8, 3, 5, 2, 9, 1, 4, 7];
 */
/*
function secondSmallest(arr) {
    let smallestnum = +Infinity;
    let secondSmallestNumber = +Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (smallestnum > arr[i]) {
            secondSmallestNumber = smallestnum;
            smallestnum = arr[i];
        } else if (arr[i] < secondSmallestNumber && arr[i] != smallestnum) {
            secondSmallestNumber = arr[i];
        }
    }
    console.log(secondSmallestNumber);
}
secondSmallest([8, 3, 5, 2, 9, 1, 4, 7]);
secondSmallest([15, 10, 3, 5, 17]);
*/

/*
function secondLargest(arr) {
    let largestNum = -Infinity;
    let secondLargestNumber = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (largestNum < arr[i]) {
            secondLargestNumber = largestNum;
            largestNum = arr[i];
        } else if (arr[i] > secondLargestNumber && arr[i] != largestNum) {
            secondLargestNumber = arr[i];
        }
    }
    console.log(secondLargestNumber);
}

secondLargest([8, 3, 5, 2, 9, 1, 4, 7]);
secondLargest([15, 10, 3, 5, 17]);
*/

//==============================================================================
