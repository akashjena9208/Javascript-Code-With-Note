// What is an Object?
// An object is a collection of key–value pairs.
// It helps you store data in a structured way.


const sym = Symbol("id"); //symbols
let user = {
  name: "Akash",
  age: 22,
  [sym]: 101,
  city: "Bangalore"
};
//Accessing Object Values :- You can access values in two ways:
//-----Use dot . when you know the key name
//-----Use [" "] when the key is stored in a variable.
console.log(user.name);   // Akash
console.log(user["age"]); // 22
//How acces we can not acces . so used [] 
console.log([sym]); //[ Symbol(id) ]
console.log(user[sym]); //101



console.log("------------Changing or Adding Properties-------------------");
let users={
  name: "Akash",
  age: 22,
  city: "Bangalore"
};
users.age = 23;           // change
users.country = "India";  // add new
console.log(users); //{ name: 'Akash', age: 23, city: 'Bangalore', country: 'India' }


console.log("-----------Looping For in --------------------");
for (let key in users) {
  console.log(key, ":", users[key]);
}


console.log("----------------Nested Objects----------------------");
let student = {
  name: "Riya",
  marks: {
    math: 90,
    english: 85
  }
};

console.log(student);//{ name: 'Riya', marks: { math: 90, english: 85 } }
console.log(student.marks.math); // 90




















