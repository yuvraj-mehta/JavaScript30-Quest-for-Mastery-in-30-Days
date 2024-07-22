// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const btn1 = document.getElementById("button1");
btn1.addEventListener("click", changeText);

function changeText() {
  document.getElementById("para1").innerText = "Text is changed.";
}

// Task 2: Add a double-click event listener to an image that toggles its visibility.
let displayImg = true;
const btn2 = document.getElementById("img");
btn2.addEventListener("dblclick", () => {
    if(displayImg === true) {
    document.getElementById("img").style.opacity = "100%";
    displayImg = false;
    console.log("changed");
  }
  else {
    document.getElementById("img").style.opacity = "0%";
    displayImg = true;
    console.log("changed");
  }
})





