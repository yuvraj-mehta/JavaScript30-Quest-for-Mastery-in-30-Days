// Activity 2: Function Expression

//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
console.log("Task 3: Function expression to find the maximum of two numbers and log the result to the console.");
let num1 = 5;
let num2 = 8;
function findMax(num1, num2) {
  if(num1 > num2) {
    console.log(`The maximum number between ${num1} and ${num2} is ${num1}`);
  }
  else{
    console.log(`The maximum number between ${num1} and ${num2} is ${num2}`);
  }
}

findMax(num1, num2);
console.log("\n");


//Task 4: Write a function expression to concatenate two strings and return the result.
console.log("Task 4: Function expression to concatenate two strings and return the result.");
let str1 = "Hello, ";
let str2 = "Yuvraj";

function concatStr(str1, str2) {
  return str1 + str2;
}

console.log(`Concatenated string is: ${concatStr(str1, str2)}`);