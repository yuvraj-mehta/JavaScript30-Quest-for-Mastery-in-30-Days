// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("btn").addEventListener("click", function() {
    document.querySelector(".para").textContent = "The text content of the paragraph has been changed.";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
document.querySelector(".image").addEventListener("mouseover", function() {
    document.querySelector(".image").style.borderColor = "red";
    document.querySelector(".image").style.border = "3px solid";
});