// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list = document.getElementById('list');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log(event.target.textContent);
  }
});


// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
