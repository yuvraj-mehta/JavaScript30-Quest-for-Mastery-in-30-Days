// Activity 4: Array Iteration


//Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log(`Task 10: Use a for loop to iterate over the array and log each element to the console.`);
let arr = [1,2,3,4,5];
for(let i = 0; i<arr.length; i++) {
  console.log(arr[i]);
}
console.log();


//Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log(`Task 11: Use the forEach method to iterate over the array and log each element to the console.`);
arr.forEach(element => {
  console.log(element);  
});