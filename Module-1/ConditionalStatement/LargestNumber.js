/**
 *  Create a program to find the largest amongst given 3 numbers. 

 */

function findLargestNumber(n1, n2, n3) {
    if (n1 == n2 || n2 == n3 || n3 == n1) {
        console.log(false);
    } else if (n1 > n2 && n1 > n3) {
        console.log(`Largest number is ${n1}`);
    } else if (n2 > n3 && n2 > n1) {
        console.log(`Largest number is ${n2}`);
    } else {
        console.log(`Largest number is ${n3}`);
    }
}

findLargestNumber(15, 8, 17);
