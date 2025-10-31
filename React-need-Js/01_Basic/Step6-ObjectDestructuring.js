let user = {
  name: "Akash",
  age: 23,
  city: "Bangalore"
};

//.......................................Object Destructuring..............................................
//Instead of doing:
// let name = user.name;
// let age = user.age;

//or 

const { name, age } = user;

console.log(name, age); // Akash 23
//react:-This is object destructuring used for props.
// function Profile({ name, age }) {
//   return <h2>{name} - {age}</h2>;
// }


//Default Values:-If the property doesn’t exist, use a default value.
const { city = "Unknown" } = user;
console.log(city);

console.log("------------------------------------Nested Destructuring------------------------------------------------------");
const studentData = {
  name: "Akash",
  scores: {
    math: 95,
    science: 90
  }
};

const { scores: { math } } = studentData;
console.log(math); // 95


console.log("------------------------------------Spread Operator (...)------------------------------------------------------");
const person = { name: "Akash", age: 22 };
console.log(person);
const updatednotPerson = {person, city: "Delhi" };// here we don't used 
const updatedPerson = { ...person, city: "Delhi" }; //here we used 
console.log(updatednotPerson);//{ person: { name: 'Akash', age: 22 }, city: 'Delhi' }
console.log(updatedPerson);//{ name: 'Akash', age: 22, city: 'Delhi' }

//inreact setUser({ ...user, age: 23 });   This updates only the age property without touching the others.




