/**
 *	 Distance to Office
     Problem Statement:
	A man reaches his office `y` min late when he travels at x km/hr. If he travels at x+2 km/hr then he
	reaches the office `y-10` min early. Find the distance between his home and office given the value
	of x and y

	Example:
	FED-Class #180DaysofPurpose
	Input x=4, y=20
	Output 6
 */
function DistanceToOffice(x, y) {
    let time = y * (x + 1) - 5 * (x + 2);
    let Distance = ((y + time) / 60) * x;
    return Distance;
}
console.log(DistanceToOffice(4, 20));
