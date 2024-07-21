// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.querySelector(".image").src = "https://images.pexels.com/photos/10161899/pexels-photo-10161899.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load";

// Task 8: Add and remove a CSS class to/from an HTML element.
document.querySelector(".image").classList.add("border");
document.querySelector(".image").classList.remove("border");
