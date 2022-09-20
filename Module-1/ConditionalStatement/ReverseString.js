/**
 *  Create a program to reverse a string.
 */

function reverseString(str) {
    let strring = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strring += str[i];
    }
    console.log(strring);
}
reverseString("relevel");
