// Activity 1: Function Declaration

//Task 1: Write a function to check if a number is even or odd and log the result to the console.
console.log("Task 1: Function to check if a number is even or odd and log the result to the console.");
let num = 10;
function OddEven(num){
  if(num % 2 === 0) {
    console.log(`The number ${num} is even`);
  }
  else{
    console.log(`The number ${num} is odd`);
  }
};

OddEven(num);

//Task 2: Write a function to calculate the square of a number and return the result.
console.log("Task 2: Function to calculate the square of a number and return the result.");
let number = 12;
let square = 1;
function calculateSquare(number) {
  square = number * number;
  return `Square of the number ${number} is ${square}`;
}

console.log(calculateSquare(number));