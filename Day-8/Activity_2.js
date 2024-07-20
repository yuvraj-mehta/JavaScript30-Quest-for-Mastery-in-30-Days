// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
  title: "The Alchemist",
  author: "UV",
  year: 2024
};
let { title, author } = book;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
