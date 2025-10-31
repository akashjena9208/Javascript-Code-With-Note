// 🧠 What are conditionals?

// They help you make decisions in your program.
// You can run certain code only if a condition is true.

// ✅ 1. if Statement
// let age = 20;

// if (age >= 18) {
//   console.log("You are an adult");
// }


// 👉 Runs only if the condition inside ( ) is true.

// ✅ 2. if...else
// let age = 16;

// if (age >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a minor");
// }


// 👉 If if is false → else runs.

// ✅ 3. if...else if...else

// Use it when you have multiple conditions.

// let marks = 85;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else {
//   console.log("Grade C");
// }

// ✅ 4. switch Statement

// Good for checking many values of the same variable.

// let day = "Tuesday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the week");
//     break;
//   case "Tuesday":
//     console.log("Keep going!");
//     break;
//   default:
//     console.log("Other day");
// }


// 🧠 Always include break — it stops the code from running into the next case.

// 💡 5. Ternary Operator (Shortcut)

// Used for simple conditions:

// let age = 18;
// let message = (age >= 18) ? "Adult" : "Minor";
// console.log(message);


// 👉 You’ll use this a lot in React JSX:

// {isLoggedIn ? <Home /> : <Login />}

// 🔁 Part 2: Loops (Repeat Code)

// Loops help you run the same code multiple times — like printing numbers or rendering list items.

// 🔹 1. for Loop

// Classic loop for fixed number of times.

// for (let i = 1; i <= 5; i++) {
//   console.log("Number:", i);
// }


// 👉 Output:

// Number: 1  
// Number: 2  
// Number: 3  
// Number: 4  
// Number: 5

// 🔹 2. while Loop

// Runs while a condition is true.

// let count = 1;

// while (count <= 3) {
//   console.log("Count:", count);
//   count++;
// }

// 🔹 3. do...while Loop

// Runs at least once, even if the condition is false.

// let x = 1;
// do {
//   console.log("x:", x);
//   x++;
// } while (x <= 3);

// 🔹 4. for...of Loop (used for arrays)

// Used to loop over array values.

// let fruits = ["apple", "banana", "cherry"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }


// 👉 Output:

// apple  
// banana  
// cherry

// 🔹 5. for...in Loop (used for objects)

// Used to loop over keys in an object.

// let user = { name: "Akash", age: 22, city: "Delhi" };

// for (let key in user) {
//   console.log(key, ":", user[key]);
// }


// 👉 Output:

// name : Akash  
// age : 22  
// city : Delhi

// 🧩 Practice Task for You

// Try this small challenge 👇

// 🧠 Problem:
// You have an array of numbers:

// let numbers = [1, 2, 3, 4, 5];