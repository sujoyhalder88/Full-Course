/**
 *  Find the nth Fibonacci number
 * 0 1 1 2 3 5 8 13 21 34 55
 */

//==== Recursion====

function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(5));

//=====Iterative===

function fibonacci(n) {
  let sum;
  let fibo1 = 0;
  let fibo2 = 1;
  if (n == 0 || n == 1) return n;
  for (let i = 2; i <= n; i++) {
    sum = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = sum;
  }
  return sum;
}
console.log(fibonacci(5));
