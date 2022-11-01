/**
 *  Since comparison was made at chaacter level 10 is placed after 1. Now to compare the array based
    upon the number we can create a custom comparator function as 

    input:[10,20,30,4,2,1] 
    output:[ 1, 2, 4, 10, 20, 30 ]

 */

function comparatorSort(a, b) {
  if (b < a) {
    return 1;
  } else {
    return -1;
  }
}
arr = [10, 20, 30, 4, 2, 1];
arr.sort(comparatorSort);
console.log(arr);
