//In JavaScript, functions are called first-class citizens (or first-class objects) because they are treated like any other value or variable.That means you can store, pass, return, and manipulate functions just like numbers, strings, or object
console.log("-------Functions can be assigned to variables--------");
//You can store a function inside a variable — just like a string or number.
////Here, the function is treated as a value and stored in the variable greet.

// assign function to variable
const greet = function() {
  console.log("Hello Akash!");
};
greet(); // 👉 Hello Akash!



console.log("---------------Functions can be passed as arguments (Callback functions)-----------------------------------------");
//You can pass a function as an argument to another function.
//A function which is pass as value to anther function is called callback 
function sayHello() {
  console.log("Hello!");
}

function greetUser(callback) {
  callback(); // call the passed function
}
//setTimeout, map, forEach work — because they accept callback functions.
greetUser(sayHello); // 👉 Hello!




console.log("---------------Functions can be returned from other functions (closures and functional programming)-----------------------------------------");
//You can even return a function from another function.
function outer() {
  return function inner() {
    console.log("Inner function called!");
  };
}

const myFunc = outer();
myFunc(); // 👉 Inner function called!



console.log("---------------Functions have properties and methods (like objects)-----------------------------------------");
//Functions in JS are special objects, so they can have properties.

function sayHi() {}
sayHi.lang = "JavaScript";

console.log(sayHi.lang); // 👉 JavaScript
//A “First-Class Function” means — “Functions are treated as values — you can store them, pass them, and return them.”




