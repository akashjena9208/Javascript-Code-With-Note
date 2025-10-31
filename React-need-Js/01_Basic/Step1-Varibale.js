
//Step 1: Variables & Data Types
//🧠 What is a Variable :- A variable is like a container that stores data.

let name = "Akash";
let age = 22;

// | Keyword | Can Change Value? | Scope    | Common Use          |
// | ------- | ----------------- | -------- | ------------------- |
// | `var`   | ✅ Yes             | Function | (Old style — avoid) |
// | `let`   | ✅ Yes             | Block    | ✅ (Most used)       |
// | `const` | ❌ No              | Block    | For constants       |


//example-------------------------------
let city = "Delhi";
city = "Mumbai"; // ✅ can change
const country = "India";
// country = "USA"; ❌ Error - can't change




let names = "Akash";         // String
let aged = 22;               // Number
let isStudent = true;       // Boolean
let hobbies = ["coding", "music"];  // Array
let user = { name: "Akash", age: 22 };  // Object
let car = null;             // Null
let citys;                   // Undefined


//You can check the type using:

console.log(typeof names); // "string"
console.log(typeof aged);  // "number"

// | Type      | Example                    | Description              |
// | --------- | -------------------------- | ------------------------ |
// | String    | `"Akash"`                  | Text                     |
// | Number    | `22`                       | Numbers                  |
// | Boolean   | `true` / `false`           | True or False            |
// | Array     | `[1, 2, 3]`                | List of items            |
// | Object    | `{name: "Akash", age: 22}` | Group of key-value pairs |
// | Null      | `null`                     | Empty value              |
// | Undefined | `undefined`                | Not assigned yet         |

// Step 2: Operators and Expressions
// 🧠 What are Operators?
// Operators are symbols that tell JavaScript to perform some action (like addition, comparison, etc.).
// Example:

let a = 10;
let b = 5;
console.log(a + b); // 15

// Here, + is an operator.

// 🔢 1. Arithmetic Operators (for math)
// Operator	Meaning	    Example	Output
// +	Addition	    10 + 5	15
// -	Subtraction	    10 - 5	5
// *	Multiplication	10 * 5	50
// /	Division	    10 / 5	2
// %	Remainder	    10 % 3	1
// **	Power	        2 ** 3	8
// 📘 Example:
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333
console.log(x % y); // 1
console.log(2 ** 4); // 16

// ⚖️ 2. Comparison Operators (for checking conditions)
//  Operator	Meaning	E           xample	    Output
//  ==	    Equal (value only)	    5 == "5"	✅ true
//  ===	    Equal (value + type)	5 === "5"	❌ false
//  !=	    Not equal	            5 != 4	    true
//  !==	     equal (value + type)	5 !== "5"	true
//  >	    Greater than	        10 > 5	    true
//  <	    Less than	            10 < 5	    false
//  >=	    Greater or equal    	5 >= 5	    true
//  <=	    Less or equal	        3 <= 5	    true

// 📘 Example:

let ageing = 18;
console.log(ageing >= 18); // true


// 🧠 Use === always in modern JS because it checks both value and type.

// 💡 3. Logical Operators (for combining conditions)
//  Operator	Meaning	Example	Output
//   &&	AND (both true)	(5 > 3 && 10 > 5)	true
//   `		`	OR (one true)
//  !	NOT	!(5 > 3)	false

// 📘 Example:

let agee = 20;
let hasID = true;

if (agee >= 18 && hasID) {
  console.log("You can enter ✅");
} else {
  console.log("Access denied ❌");
}

// 🔄 4. Assignment Operators
// Operator	    Example     	Meaning
// =	         x = 5	        assign value
// +=	         x += 2	        same as x = x + 2
// -=	         x -= 2	        same as x = x - 2
// *=	         x *= 2	        same as x = x * 2
// /=	         x /= 2     	same as x = x / 2

// 📘 Example:
let num = 5;
num += 3;  // 8
num *= 2;  // 16
console.log(num);

// 🧮 5. Ternary Operator (Shortcut for if-else)
// let age = 18;
// let msg = (age >= 18) ? "Adult" : "Minor";
// console.log(msg); // "Adult"