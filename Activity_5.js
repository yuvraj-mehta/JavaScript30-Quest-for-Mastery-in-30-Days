// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
let book = {
  author: "Yuvraj",
  title: "JS with Yuvraj",
  year: "2024"
}
for (let key in book) {
  console.log(key + ": " + book[key]);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));