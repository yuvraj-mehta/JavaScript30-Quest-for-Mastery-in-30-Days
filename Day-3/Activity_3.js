//Activity 3: Switch Case


//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 4;
switch(day) {
  case 1:
    console.log(`The day is Sunday.`);
    break;
  case 2:
    console.log(`The day is Monday.`);
    break;
  case 3:
    console.log(`The day is Tuesday.`);
    break;
  case 4:
    console.log(`The day is Wednesday.`);
    break;
  case 5:
    console.log(`The day is Thursday.`);
    break;
  case 6:
    console.log(`The day is Friday.`);
    break;
  case 7:
    console.log(`The day is Saturday.`);
    break;
  default:
    console.log(`Invalid day.`);
}



//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = 'A';
    break;
  case score >= 80:
    grade = 'B';
    break;
  case score >= 70:
    grade = 'C';
    break;
  case score >= 60:
    grade = 'D';
    break;
  default:
    grade = 'F';
}

console.log(`The grade is ${grade}.`);