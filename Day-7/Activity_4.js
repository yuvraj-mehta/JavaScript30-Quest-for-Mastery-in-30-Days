// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
let book = {
  author: "Yuvraj",
  title: "JS with Yuvraj",
  year: "2024"
}
book.TitleAndYear = function(){
  return `Year: ${this.year}, Title: ${this.title}`;
}
console.log(book.TitleAndYear(),"\n")

