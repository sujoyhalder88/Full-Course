/**
 *  Find if a given number is an Armstrong number or not.
    Hint : Armstrong number is a number that is equal to the sum of cubes of its digits

 */

function armstrongNumber(n) {
    let temp = n;
    let result = 0;
    let rem = 0;
    while (n !== 0) {
        rem = n % 10;
        result += rem * rem * rem;
        n = parseInt(n / 10);
    }
    result == temp ? console.log("Armstorng") : console.log("not Armstorng");
}
armstrongNumber(153);
