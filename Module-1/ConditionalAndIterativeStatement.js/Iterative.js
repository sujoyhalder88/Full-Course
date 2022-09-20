/**
 * Iterate from 1 to 100(using for loop and if else statement) (Submittable assignment)/
	5 Print Relevel if divisible by 3/
	5 Print Buzz if divisible by 5/
	5 Print 6indBuzz if divisible by 15/
	5 Print the number if all the above condition fails0
 */
function usingLoop(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("MindBuzz");
        } else if (i % 3 == 0) {
            console.log("relevel");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
usingLoop(100);
