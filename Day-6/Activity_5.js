// Activity 5: Multi-dimensional Arrays

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
console.log(`Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.`);
let arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(arr,"\n");

for(let i = 0; i<arr.length; i++){
  // for(let j = 0; j<arr[i].length; j++){
  //   console.log(arr[i][j]);
  // }
  console.log(arr[i].toString());
}


//Task 13: Access and log a specific element from the two-dimensional array.

console.log(arr[0][2]);