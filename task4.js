let operation = prompt("Choose an operation: \n1. Addition (+) \n2. Subtraction (-) \n3. Multiplication (*)");
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
switch (operation) {
    case "+":let result; result = num1 + num2;
    console.log("The result of " + num1 + " + " + num2 + " is: " + result);
    break;
  case "-":
    result = num1 - num2;console.log("The result of " + num1 + " - " + num2 + " is: " + result);
    break; case "*":
    result = num1 * num2;
    console.log("The result of " + num1 + " * " + num2 + " is: " + result);
    break;
  default:
    console.log("Invalid operation. Please choose +, -, or *.");
}