console.log("------------Function Declaration--------------");

// Function Declaration
// ✅ Declared with "function" keyword
// ✅ Hoisted → You can call it before it's defined

sayHello(); // works even before definition

function sayHello() {
  console.log("Hello from Function Declaration!");
}



console.log("------------Function Expression--------------");
// Function Expression
// ❌ Not hoisted → must be defined before use
// Stored inside a variable

const greet = function() {
  console.log("Hello from Function Expression!");
};

greet(); // ✅ Works after definition




 

console.log("------------Arrow Function--------------");
// Arrow Function (introduced in ES6)
// ✅ Short syntax
// ❌ Does NOT have its own 'this' keyword

const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8


console.log("------------Anonymous Function--------------");

// Anonymous Function
// ❌ Has no name
// ✅ Commonly used in callbacks

setTimeout(function() {
  console.log("Hello from Anonymous Function!");
}, 1000);







console.log("------------Named Function Expression--------------");

// Named Function Expression
// ✅ Function has a name inside expression
// ✅ Useful for recursion or debugging

const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};

console.log(factorial(5)); // Output: 120

console.log("------------IIFE  Function--------------");

// IIFE = Immediately Invoked Function Expression
// ✅ Runs instantly after being created
// ✅ Used to avoid polluting global scope

(function() {
  console.log("This function runs immediately!");
})();






















console.log("------------------------------FUNCTION TYPES — BY BEHAVIOR / PURPOSE---------------------------------------------");
console.log("******************callback*******************");

// Callback Function
// ✅ Passed as an argument to another function

function greetUser(name, callback) {
  console.log("Hello " + name);
  callback(); // call the function passed in
}

function showMessage() {
  console.log("Welcome to JavaScript!");
}

greetUser("Akash", showMessage);




console.log("********************Higher-Order*******************");

// Higher-Order Function
// ✅ A function that takes another function as input OR returns one

function higherOrder(fn) {
  console.log("Inside Higher-Order Function");
  fn(); // calling the function passed in
}

function sayHi() {
  console.log("Hi from Callback Function!");
}

higherOrder(sayHi);




// Constructor Function
// ✅ Used with 'new' keyword to create objects

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("Akash", 22);
console.log(user1.name); // Output: Akash





// Generator Function (use * symbol)
// ✅ Yields multiple values one by one

function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGen();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3




// Async Function (always returns a Promise)
// ✅ Simplifies working with asynchronous code

async function fetchData() {
  return "Data Loaded!";
}

fetchData().then((res) => console.log(res)); // Output: Data Loaded!




// Recursive Function
// ✅ A function that calls itself

function countdown(n) {
  if (n === 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(5);






// Pure Function
// ✅ No side effects
// ✅ Same input → same output

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same)




// Impure Function
// ❌ Has side effects (depends on external variable)

let count = 0;
function increase() {
  return ++count;
}

console.log(increase()); // 1
console.log(increase()); // 2  (different output each time)



// Closure Function
// ✅ Inner function remembers variables from outer function

function outer() {
  let secret = "I am hidden!";
  return function inner() {
    console.log(secret);
  };
}

const showSecret = outer();
showSecret(); // Output: I am hidden!
