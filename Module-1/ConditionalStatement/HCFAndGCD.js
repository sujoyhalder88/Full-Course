/**
 *  Write a program to find the HCF or GCD of two integers

 */

function hcfAndGcd(n1, n2) {
    let HCF;
    for (i = 1; i <= n1 && i <= n2; i++) {
        if (n1 % i == 0 && n2 % i == 0) {
            HCF = i;
        }
    }
    console.log(`HCF of ${n1} and ${n2} is ${HCF}`);
}
hcfAndGcd(24, 60);
