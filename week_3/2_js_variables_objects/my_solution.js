// I paired by myself on this challenge.




// Pseudocode
// create a new variable named secretNumber with initialized value of 7 (number)
// create a new variable named password with initialized value of "just open the door" (String)
// create a new variable named allowedIn with initialized value of false (boolean)
// create a new variable named members, which is an array of Strings. 
// Initialize the array with at least 4 elements. The first element must be "John" and the fourth must be "Mary".


// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = [ "John", "Quy", "Obama", "Mary" ];

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 





// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// I started by running the program in node.js, and try to figure out the issue based on the feedback message.
// Step by step, I create variables (name, type, initial value) based on the feedback until all tests pass.
// I learned that every test should be designed in a way so user can receive a proper feedback of what exactly the error is.



// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

