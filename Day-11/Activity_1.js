// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
let promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({username: "UV", email: "uv@example.com"})
  }, 2000);
})

promiseOne.then((user) => {
  console.log(user);
})

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using catch().
let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Something went wrong");
  }, 2000);
})

promiseTwo.catch((user) => {
  console.log(user)
})