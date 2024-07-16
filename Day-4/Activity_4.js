// Activity 4: Nested Loops

//Task 7: Write a program to print a pattern using nested for loops:•
// *
// * *
// * * *
// * * * *
// * * * * *

for(let i = 0; i<5; i++) {
  let pattern = "";
  for(let j = 0; j < i+1; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}