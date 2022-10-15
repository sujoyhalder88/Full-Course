// write a function Factorial number using recursion

// Recursion

function fact(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return n * fact(n - 1);
}
console.log(fact(5));

//====Iterative====

function factorial(n) {
    let fact = 1;
    if (n == 0 || n == 1) return n;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));
