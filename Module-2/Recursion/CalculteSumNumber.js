/**
 *  Calculate the sum of natural number up to n
 */

//===== Recursion===========
function calculateSumNumber(n) {
    if (n == 0) return 0;
    return n + calculateSumNumber(n - 1);
}
console.log(calculateSumNumber(10));

// =====Iterative========

function natureNumber(n) {
    let sum = 0;
    if (n == 0) return 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(natureNumber(10));
