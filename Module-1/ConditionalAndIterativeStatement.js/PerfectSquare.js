/**
 * Program to check if a number is a perfect square
 */
function perfectSquare(n) {
    if (n < 0) return false;
    let square = Math.sqrt(n);
    if (n % square == 0) {
        console.log("It's Perfect Square");
    } else {
        console.log("It's Not Perfect Square");
    }
}
perfectSquare(64);
