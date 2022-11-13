/**
 * Given there are N seats and N students in a room.An array seat of length is given where seat[i] is the position of ith seat and
    also an array of students of length n is given where stud[i] is the position of ith student.
    We can perform the following move any number of times.
    Increase or decrease the position of ith student(moving position of ith student from position j to j+1 or j-1)
    We need to find the minimum number of moves required to move each student to a seat so that no two students share same
    seat.
    Example: seat = [2,1,5]
    stud = [2,7,4]
    Output:5

 */

let seat = [2, 1, 5];
let stud = [2, 7, 4];

function arrange(seat, stud) {
  seat.sort((a, b) => a - b);
  stud.sort((a, b) => a - b);
  let counter = 0;
  for (let i = 0; i < seat.length; i++) {
    counter += Math.abs(seat[i] - stud[i]);
  }
  return counter;
}

console.log(arrange(seat, stud));
