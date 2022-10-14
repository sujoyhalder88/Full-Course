/**
 *  Write a JavaScript conditional statement to find the sign of product of three numbers.
 *  Display an alert box with the specified sign.
 * 
 *  Sample numbers : 3, -7, 2
	Output : The sign is -
 */

function findTheSign(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        console.log(`Here are not present any sign `);
    } else if (a > 0 && b < 0 && c > 0) {
        console.log(`Here are ${b} present  sign`);
    } else if (a < 0 && b > 0 && c > 0) {
        console.log(`Here are ${a} present sign`);
    } else {
        console.log(`Here are ${c} present  sign`);
    }
}
// test cases
findTheSign(3, 7, 2);
findTheSign(3, -7, 2);
findTheSign(-3, 7, 2);
findTheSign(3, 7, -2);
