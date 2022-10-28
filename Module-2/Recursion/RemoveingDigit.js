/**
 * https://cses.fi/problemset/task/1637
 */

function removingDigit(n) {
  let result = [];
  while (n > 0) {
    let digit = n % 10;
    result.push(digit);
    n = Math.floor(n / 10);
  }
  return result;
}
function stepOfDigit(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let digits = removingDigit(n);
  let ans = Infinity;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] == 0) continue;
    ans = Math.min(ans, stepOfDigit(n - digits[i]));
  }
  return 1 + ans;
}
console.log(stepOfDigit(27));
