// Impure function
var mutateNum = 0;
function impureFunction(num) {
    return (mutateNum += num);
}
let result1 = impureFunction(5);
console.log(result1);

let result2 = impureFunction(5);
console.log(result2);

let result3 = impureFunction(5);
console.log(result3);

console.log(`mutateNum ${mutateNum}`);
