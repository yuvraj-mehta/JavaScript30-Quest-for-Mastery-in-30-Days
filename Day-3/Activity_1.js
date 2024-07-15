//Activity 1: If-Else Statements


//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 5;
if(num > 0) {
  console.log(`The num ${num} is positive`);
}
else if(num < 0) {
  console.log(`The num ${num} is negative`);
}
if(num === 0) {
  console.log(`The num ${num} is zero`);
}

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 18;
if(age >= 18) {
  console.log(`\nThe person's age is ${age}years.`)
  console.log(`The person is eligible to vote.`);
}
else {
  console.log(`\nThe person's age is ${age}years.`)
  console.log(`The person is not eligible to vote.`);
}