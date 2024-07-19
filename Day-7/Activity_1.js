// Activity 1: Object Creation and Access


// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
console.log("Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.");
let book = {
  author: "Yuvraj",
  title: "JS with Yuvraj",
  year: "2024"
}
console.log(book,"\n");

// Task 2: Access and log the title and author properties of the book object.
console.log("Task 2: Access and log the title and author properties of the book object.");
console.log(`Title of the book is: ${book.title}`);
console.log(`Author of the book is: ${book.author}`);
console.log();


// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
console.log("Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.");
book.getBookDetails = function() {
  return `${this.title} by ${this.author}`;
}
console.log(book.getBookDetails());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updatedYear = function(updatedYear) {
  year = updatedYear;
  // return this;
}
book.updatedYear(2025);
console.log(book, "\n");


// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
console.log("Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.");

let library = {
  name: "My Library",
  books: [
    {
      author: "Yuvraj",
      title: "JS with Yuvraj",
      year: "2024"
    },
    {
      author: "John Doe",
      title: "JavaScript Basics",
      year: "2022"
    },
    {
      author: "Jane Smith",
      title: "Advanced JavaScript",
      year: "2023"
    }
  ]
};

console.log(library,"\n");

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Task 6: Access and log the name of the library and the titles of all the books in the library.");
console.log(`Library Name: ${library.name}`);
console.log("Books in Library:");
library.books.forEach(book => {
  console.log(book.title);
});
console.log();


