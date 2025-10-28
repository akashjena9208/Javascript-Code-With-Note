// 🧠 What is an Array?
// An array is a special variable that can hold multiple values in a single place.
// Think of it like a list or box with slots.
// 📦 Example:of Array creation 

//1. Array Literal
const scores = new Array(10, 20, 30);
console.log(scores);

//2.Array Constructor
const scoreed = new Array(100, 200, 300);
console.log(scoreed);

//or 
const empty = new Array(3); // Creates [ <3 empty items> ]
console.log(empty);


// Array.of():- Always creates an array with the given values, even a single number.
const ids = Array.of(101, 102, 103);
console.log(ids);


//Array.from()
const chars = Array.from('Akash'); // ['A', 'k', 'a', 's', 'h']
const doubled = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]

console.log(chars);
console.log(doubled);


//map 
//map() — Transform Each Item  :--->map() creates a new array after applying some operation to each element.
//{users.map(user => <li>{user.name}</li>)}
const numbers = [1, 2, 3, 4];
const double = numbers.map(num => num * 2);
console.log(double);



//filter() creates a new array with only the elements that meet a condition.
const number = [1, 2, 3, 4, 5, 6,8,10];
const even = number.filter(num => num % 2 === 0);
console.log(even);




//reduce():-The .reduce() method in JavaScript is a powerful array function used to accumulate or reduce all elements of an array into a single value — such as a sum, product, object, or even another array.
// array.reduce((accumulator, currentValue, index, array) => {
//   // logic
// }, initialValue);

// - accumulator: the running total/result.
// - currentValue: the current element being processed.
// - initialValue: (optional) the starting value for the accumulator.



const numbera = [1, 2, 3, 4];
const total = numbera.reduce((sum, num) => sum + num, 0);
console.log(total);



const numo = [1, 2, 3, 4];
const sum = numo.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10









