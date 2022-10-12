// ordinary function multiply 3 argument passing
function multiply(a, b, c) {
    return a * b * c;
}
// console.log(multiply(1, 2, 3));

// Currying function multiplication

let curryMultiply = (multi) => {
    return (a) => {
        return (b) => {
            return (c) => {
                return multi(a, b, c);
            };
        };
    };
};
let resultMultiply = curryMultiply(multiply);
console.log(resultMultiply(1)(2)(3));
