// Activity 3: Array Methods (Intermediate)


//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
console.log(`Task 7: Use the map method to create a new array where each number is doubled and log the new array`);
let arr = [1,2,3,4,5];
let arr2 = arr.map(doubleNumber);
function doubleNumber(arr) {
  return arr*2;
}
console.log(`Original array was: ${arr}`);
console.log(`Mapped array is: ${arr2}\n`);


//Task 8: Use the filter method to create a new array with only even numbers and log the new array.
console.log(`Task 8: Use the filter method to create a new array with only even numbers and log the new array.`);
let flteredArr = arr.filter(filterEven);
function filterEven(arr) {
  if(arr%2 === 0) {
    return arr;
  }
}
console.log(`Filtered array is: ${flteredArr}\n`);


//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
console.log(`Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.`);
let reducedArr = arr.reduce(reduceSum);
function reduceSum(sum, num) {
  return sum + num;
}
console.log(`Sum of all the elements in the array ${arr} is: ${reducedArr}`);