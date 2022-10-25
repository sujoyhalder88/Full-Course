/**
 * Subarray with sum 0 – A subarray in a given array having a sum equal to 0.
    Problem – Given an array having positive and negative numbers. You need to find a subarray having a sum of 0. For
    
    example –
    Input – {0, 2, 4, -1, -3, 4, -5, 5}
    Output –
    Index 3 to 5
    Index 6 to 7

 */

function subArrayWithZeroSum(arr) {
  var map = new Map();
  var n = arr.length;
  var output = new Array();

  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += arr[i];

    if (sum == 0) {
      const pair = {
        key: 0,
        value: i,
      };
      output.push(pair) > 0;
    }
    var tempArray = new Array();

    if (map.has(sum)) {
      tempArray = map.get(sum);
      for (var j = 0; j < tempArray.length; j++) {
        const pair = {
          key: tempArray[j] + 1,
          value: i,
        };
        output.push(pair) > 0;
      }
    }
    tempArray.push(i) > 0;
    map.set(sum, tempArray);
  }
  if (output.length == 0) {
    console.log("No subarray having zero sum exists");
  } else {
    print(output);
  }
}

function print(out) {
  for (var i = 0; i < out.length; i++) {
    var p = out[i];
    console.log("Index " + p.key + " to " + p.value + "\n");
  }
}

var arr = [0, 2, 4, -1, -3, 4, -5, 5];
var output = subArrayWithZeroSum(arr);
