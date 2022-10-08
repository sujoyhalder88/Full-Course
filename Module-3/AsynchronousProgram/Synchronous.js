console.log("HI");
function Geet() {
    console.log("BYE");
}
Geet();
console.log("HI BYE");

//==================================================================//
// callStack in a sync program
const arr = [1, 2, 3, 4, 5];
arr.forEach((value, index) => {
    console.log("At index " + index + " the value is " + value);
});
console.log("Callback as a Sync program");
