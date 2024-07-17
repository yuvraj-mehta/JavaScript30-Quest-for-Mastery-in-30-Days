// Activity 3: Arrow Functions

// Task 6: Write an arrow function to calculate sum of two numbers and return the result.
console.log("Task 6: Arrow function to calculate sum of two numbers and return the result.");
let num1 = 5;
let num2 = 10;
let  calcSum =  (num1, num2) => {
  return num1 + num2;
}
console.log(`Sum of the numbers ${num1} and ${num2} is ${calcSum(num1, num2)}\n`);


// Task 6: Write an arrow function to check if a string contains a specific character the return a boolean value.
console.log("Task 7: Arrow function to check if a string contains a specific character the return a boolean value.");
let str = "Hello, Yuvraj!";

let checkChar = (str, char) => {
  return str.includes("?");
}
console.log(`Does the string "${str}" contain the character "!"? ${checkChar(str, "!")}`);