// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.
const changeColor = () => {
  document.getElementById("div1").style.backgroundColor = "red";
}
div1 = document.getElementById("div1");
div1.addEventListener("mouseover", changeColor);





// generateColor()

// Task 4: Add a mouseout event listener to an element that resets its background color.
const resetColor = () => {
  document.getElementById("div1").style.backgroundColor = "yellow";
}
div1.addEventListener("mouseout", resetColor);