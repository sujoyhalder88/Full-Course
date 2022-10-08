/**
 * More Example: Array.prototype.map(), Array.prototype.flatmap(),
	Array.prototype.filter(),
 * 
 */

var arr = [1, 2, 3, 4, 5];
var arrMap = arr.map((num) => {
    return num * num;
});
console.log("MAP: ", arrMap);

//===============================================//
var arrFilter = arr.filter((num) => {
    return num % 2 == 0;
});
console.log("FILTER: ", arrFilter); //returns even value;

//===========================================================//

var arrFlatMap = arr.flatMap((num) => {
    return num % 2 == 0 ? num : num + 1;
});
console.log("FLATMAP: ", arrFlatMap); //converts all odd value to even and returns it
