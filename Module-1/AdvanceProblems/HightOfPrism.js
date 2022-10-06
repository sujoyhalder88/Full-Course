/**
 * Problem Statement:
	Given the volume and perimeter of the triangular base of the prism, and the circumference of the
	inner circle. Calculate the height of the prism.

	Input radius=3, perimeter=15, Volume=270
	Output 12

 */
function heightOfPrism(r, p, v) {
    let height = parseInt(v / (r * (p / 2)));
    return height;
}
console.log(heightOfPrism(3, 15, 270));
