// this is global variable
var num = 5;
function pureFunction(n1, n2) {
    return n1 + n2;
}
// allows return same result given same input
let result1 = pureFunction(num, 5);
console.log(result1);

let result2 = pureFunction(10, num);
console.log(result2);
