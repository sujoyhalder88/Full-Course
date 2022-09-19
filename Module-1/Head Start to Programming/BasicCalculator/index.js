let number1 = parseInt(prompt("Enter the First Number"));
let number2 = parseInt(prompt("Enter the Second Number"));
const opperator = prompt("Select the Opperator (/,*,+,-) ");

let result;
if (opperator == "*") {
    result = number1 * number2;
} else if (opperator == "/") {
    result = number1 / number2;
} else if (opperator == "+") {
    result = number1 + number2;
} else {
    result = number1 - number2;
}

document.write(`${number1} ${opperator} ${number2} = ${result}`);

// console.log(`${number1} ${opperator} ${number2} = ${result}`);
