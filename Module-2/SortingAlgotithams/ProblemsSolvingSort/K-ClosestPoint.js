/**
 * Given two array of points one representing the x-coordinate and one representing the y-coordinate and a integer
    k,return the k closest points to origin(0,0)
    The distance between two points is Euclidean distance sqr_root((x1-x2)^2+(y1-y2)^2)
    Answer can be written in any order

    Input :x = [1,2,3];
    y = [2,3,4];
    K = 2;

    Output:
    Here
    Distance between (1,2) and origin is sqrt(5)
    Distance between (2,3) and origin is sqrt(13)
    Distance between (3,4) and origin is sqrt(25)
    As sqrt(5)<sqrt(13)<sqrt(25) so the closest points will be
    (1,2),(2,3),(3,4).As we need closest 2 points the answer will be (1,2) and (2,3)

 */
function k_closestPoint(x, y, k) {
  let output = [];
  let n = x.length;
  let closestPoint = new Array(n);
  for (let i = 0; i < n; i++) {
    closestPoint[i] = x[i] * x[i] + y[i] * y[i];
  }
  closestPoint.sort((a, b) => a - b);
  let k_dist = closestPoint[k - 1];
  for (let i = 0; i < n; i++) {
    let temp = x[i] * x[i] + y[i] * y[i];
    if (temp <= k_dist) {
      output.push(x[i], y[i]);
    }
  }
  return output;
}

console.log(k_closestPoint([1, 2, 3], [2, 3, 4], 2));
