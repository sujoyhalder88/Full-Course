/**
 *  Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result
	Sample numbers : 0, -1, 4
	Output : 4, 0, -1
 */

function sortThreeNumber(a, b, c) {
    if (a > b && a > c) {
        if (b > c) {
            console.log(`Three number sorts ${a},${b} and ${c}`);
        } else {
            console.log(`Three number sorts ${a},${c} and ${b}`);
        }
    } else if (b > c && b > a) {
        if (c > a) {
            console.log(`Three number sorts ${b},${c} and ${a}`);
        } else {
            console.log(`Three number sorts ${b},${a} and ${c}`);
        }
    } else if (c > b && c > a) {
        if (b > a) {
            console.log(`Three number sorts ${c},${b} and ${a}`);
        } else {
            console.log(`Three number sorts = ${c},${a} ${b}`);
        }
    }
}
sortThreeNumber(0, -1, 4);
