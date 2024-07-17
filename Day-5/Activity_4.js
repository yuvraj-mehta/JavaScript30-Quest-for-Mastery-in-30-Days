// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
console.log(`Function that takes two parameters and returns their product. Provide a default value for the second parameter.
let num1 = 5;`);
let num1 = 5;
let num2 = 10;
function calcProduct(num1, num2 = 2) {
  return num1 * num2;
}
console.log(`The  product of ${num1} and ${num2} is `, calcProduct(num1, num2), "\n");

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
let person = "Yuvraj";
let age = 21;

function greetMsg(name, age = 21) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greetMsg(person, age);