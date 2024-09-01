 /*
 Object declare 2 way a)- Singleton
                      b)-Literial
 */

// singleton: Object create using Constactor  that is Singleton  object
// constroter methode throw example Object.create

// .......................................object literals...............................................................................................
/*const jsuser ={} //empty object
//OR
const jsuser1={key:value}
*/

const mySym = Symbol("key1")

// ......................Object literals..............................
const JsUser = {
    name: "Akash",
    "full name": "Akash  Jena",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "akshjena@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//...........................................Value Acess the object..........................................................
console.log(JsUser.email)
//OR
console.log(JsUser["email"])

//symbol acess
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "akash@chatgpt.com"
console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());