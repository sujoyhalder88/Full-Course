/**
 *    Given two numbers, find the least possible positive integer that is divided by them.
 *    Input 10,5
	  Output 10

	  Input 12,16
	  Output 80

 */
function LCM(num1, num2) {
    if (num1 > num2) greater = num1;
    else greater = num2;
    while (true) {
        if (greater % num1 == 0 && greater % num2 == 0) {
            lcm = greater;
            break;
        }
        greater += 1;
    }
    return lcm;
}

console.log("L.C.M. :", LCM(12, 16));
