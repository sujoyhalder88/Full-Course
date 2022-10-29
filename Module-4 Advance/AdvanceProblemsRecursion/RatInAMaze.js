/**
 *   Rat in a Maze
 */

let grids = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 1, 1],
];
let visit = [];
for (let i = 0; i < grids.length; i++) {
  let temp = Array(grids[0].length).fill(false);
  visit.push(temp);
}

function inMaze(i, j, m, n) {
  if (i == m - 1 && j == n - 1) {
    return 1;
  }
  if (
    i < 0 ||
    j < 0 ||
    i >= m ||
    j >= m ||
    grids[i][j] == 0 ||
    visit[i][j] == true
  ) {
    return 0;
  }
  visit[i][j] = true;
  let result = 0;
  result += inMaze(i, j + 1, m, n);
  result += inMaze(i + 1, j, m, n);
  result += inMaze(i, j - 1, m, n);
  result += inMaze(i - 1, j, m, n);

  visit[i][j] = false;
  return result;
}
console.log(inMaze(0, 0, grids.length, grids[0].length));
