/**
 * Given two arrays S and F where elements in S represents the starting time of the meeting and elements in F represent the
    ending time of meetings.We need to find maximum number of meetings that can be accomodated in a meeting room

    Input:S:{1,3,0,6,8,4}
          F:{2,4,6,7,9,9}

    Output:4
 */

function meetingRooms(start, finish) {
  let pair = [];
  for (let i = 0; i < start.length; i++) {
    pair.push([start[i], finish[i]]);
  }
  pair.sort((a, b) => a[1] - b[1]);
  let counter = 1;
  let timeLimit = pair[0][1];
  for (let i = 1; i < start.length; i++) {
    if (pair[i][0] >= timeLimit) {
      counter++;
      timeLimit = pair[i][1];
    }
  }
  return counter;
}
console.log(meetingRooms([1, 3, 0, 6, 8, 4], [2, 4, 6, 7, 9, 9]));
