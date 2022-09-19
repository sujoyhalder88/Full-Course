/**
 * 2. Write a function that compares two numbers and returns the larger of the two.
	 Bonus: Output appropriate message if numbers cant be compared or are equal
 */

function compareTwoNumber(n1, n2) {
    n1 === n2 ? console.log(" eqeal") : console.log("not equal");
    n1 > n2
        ? console.log(`SmallNumber ${n1}`)
        : console.log(`LargeNumber ${n2}`);
}
compareTwoNumber(5, 7);
