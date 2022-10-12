/**
 *  Given a positive number you need to write a program in javascript to find the sum of the inner digits of
	that number

	Input 2124
	Output 3
     
	Input 70
	Output 70
 */

function sumOfDigit(n) {
    let sum = 0;
    if (n.toString().length < 3) {
        return n;
    }
    do {
        n = parseInt(n / 10);
        sum = sum + (n % 10);
    } while (parseInt(n / 100) != 0);
    {
        return sum;
    }
}

console.log(sumOfDigit(2135));
