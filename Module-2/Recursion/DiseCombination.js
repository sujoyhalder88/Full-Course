/*
fibbonacci 8 th number .. 0,1,1,2,3,5,8,13,21,44,55
function f(n) {
  //   base case
  if (n == 0) return 0;
  if (n == 1) return 1;
  //assumption
  let assume = f(n - 1) + f(n - 2);
  //self work
  return assume;
}
console.log(f(8));
*/

// Dise Combination

function diseCombination(n) {
  if (n == 0) return 1;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (n - i < 0) continue;
    result += diseCombination(n - i);
  }
  return result;
}
console.log(diseCombination(4));
