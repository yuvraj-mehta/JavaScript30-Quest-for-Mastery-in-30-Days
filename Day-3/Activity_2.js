//Activity 2: Nested If-Else Statements


//Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a = 54;
let b = 75;
let c = 98;

if(a > b) {
  if(a > c) {
    console.log(`The number ${a} is the greatest among ${a}, ${b} and ${c}`);
  }
  else {
    console.log(`The number ${c} is the greatest among ${a}, ${b} and ${c}`);
  }
}
else {
  if(b > c) {
    console.log(`The number ${b} is the greatest among ${a}, ${b} and ${c}`)
  }
  else {
    console.log(`The number ${c} is the greatest among ${a}, ${b} and ${c}`);
  }
}