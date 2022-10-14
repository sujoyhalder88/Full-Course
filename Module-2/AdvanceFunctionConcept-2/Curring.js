// it's is normal opperation below
const add = (a, b, c) => {
    return a + b + c;
};
add(1, 2, 3);

//here we using curring opperation
const currAdd = (add) => {
    return (a) => {
        return (b) => {
            return (c) => {
                return add(a, b, c);
            };
        };
    };
};
const sum = currAdd(add);
console.log(sum(1)(2)(3));
