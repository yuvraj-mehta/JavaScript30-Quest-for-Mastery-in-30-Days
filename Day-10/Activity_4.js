// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const dropdown = document.getElementById('dropdown');
const selectedValue = document.getElementById('selectedValue');

dropdown.addEventListener('change', function() {
  selectedValue.textContent = dropdown.value;
});