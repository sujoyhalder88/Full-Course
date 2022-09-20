/**
 * Create a pattern using ‘*’ as shown below using loops.
 *  *
   ***
  *****
 *******
*********

 */

function printParttern(n) {
    let string = "";
    // External loop
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}
printParttern(5);
