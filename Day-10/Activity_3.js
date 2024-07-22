// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.getElementById("inp");
const log = document.getElementById("log");
input.addEventListener("keydown",(e) => {
  log.textContent += `${e.code} `
  console.log(e.code)
})


// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

const input2 = document.getElementById("inp2");
const log2 = document.getElementById("log2");
input2.addEventListener("keyup",(e) => {
  log2.textContent += `${e.code} `
  console.log(e.code)
})