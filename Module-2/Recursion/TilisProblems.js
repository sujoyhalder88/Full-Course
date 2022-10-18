/**
 * What is a Tiling Problem ?
	Given a “2 x n” tile board with fixed width of 2 units and the length of the board is ‘n’ units, the area of the board
	is n x 2 sq. units and tiles of size 2 x 1 sq. units.
	The Tiling Problem asks us to find out in how many ways we can arrange these tiles to fully cover the tile board.
	( A tile can either be placed horizontally i.e as a 1 x 2 tile or vertically i.e as 2 x 1 tile
	Example Test Case:
	For N = 2, i.e a grid of 2 x 2 there are two ways you can fill the 2 x 2 size grid using tiles of size 2 x 1 and 1 x 2

 */

function tiling(n) {
    if (n == 0 || n == 1) return 1;
    return tiling(n - 1) + tiling(n - 2);
}
console.log(tiling(2));
