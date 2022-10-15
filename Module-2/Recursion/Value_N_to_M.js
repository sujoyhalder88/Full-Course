/**
 * Calculate the value of n to the m power
 *
 */

//====Recursion=====

function powerNumber(n, m) {
    if (m == 0 || m == 1) return n;
    return n * powerNumber(n, m - 1);
}
console.log(powerNumber(3, 2));

//====Iterative=====
function power(n, m) {
    let result = 1;
    if (m == 0 || m == 1) return n;
    for (let i = 1; i <= m; i++) {
        result *= n;
    }
    return result;
}
console.log(power(3, 3));
