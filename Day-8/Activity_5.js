// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const myObject = {
  // Method
  myMethod() {
    console.log("This is a method");
  },
  // Property
  myProperty: "This is a property"
};

console.log(myObject);

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const variable1 = "name";
const variable2 = "age";

const myObj = {
  [variable1]: "UV",
  [variable2]: 25
};

console.log(myObj);