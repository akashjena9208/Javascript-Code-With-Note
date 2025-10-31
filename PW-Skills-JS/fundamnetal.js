//write a function that only has return (and nothing else inside or after it).
//case1
function test() {
  return;
}

console.log(test()); // 👉 undefined
//You wrote a function that just says return; without returning any value. So, it automatically returns undefined.



//case2
function test2() {
  console.log("Hi Akash");
}

console.log(test2()); // 👉 Hi Akash undefined
//Even if you don’t write return, JS adds return undefined; automatically at the end of every function.


//case3
function test3() {
  return "Hello Akash";
}

console.log(test3()); // 👉 Hello Akash
//✅ Here, since you explicitly return a value, that value is what you get when you call the function.

// | Function type  | Example                              | Output      |
// | -------------- | ------------------------------------ | ----------- |
// | No `return`    | `function f(){ console.log("Hi"); }` | `undefined` |
// | `return;` only | `function f(){ return; }`            | `undefined` |
// | `return value` | `function f(){ return "Hi"; }`       | `"Hi"`      |




//What is an Arrow Function?:-

//Normal Function Syntax:
function greet(name) {
  return "Hello " + name;
}

//Arrow Function Syntax:
const greet = (name) => {
  return "Hello " + name;
};
//ex2-
const add = (a, b) => {
  return a + b;
};


//ex3-
const adds = (a, b) => a + b;


//✅ If only one parameter:
const greet = name => "Hello " + name;
//✅ If no parameter:
const sayHi = () => "Hi Akash!";



