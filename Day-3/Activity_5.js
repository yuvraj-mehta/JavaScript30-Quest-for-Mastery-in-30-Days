// Activity 5: Combining Conditions

//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 1600;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`The year ${year} is a leap year.`);
} else {
  console.log(`The year ${year} is not a leap year.`);
}