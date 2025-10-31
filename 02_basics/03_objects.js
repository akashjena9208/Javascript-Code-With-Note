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
    "full name": "Akash  Jena",     // we can not acces this value in using . like  console.log(JsUser.full name) so that reson console.log(JsUser["full name"]) 
    [mySym]: "mykey1", // if i reprensat as  symbol that time used []  example :[mySym]: "mykey1"   . if used normal key write normlayy mySym: "mykey1"
    age: 18,
    location: "Jaipur",
    email: "akshjena@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//...........................................Value Acess the object..........................................................
// dot(.) Best when you know the exact property name.
console.log(JsUser.email)
//OR
//- Best when the key is dynamic or stored in a variable.Works even if the key has spaces or special characters
console.log(JsUser["email"])

//symbol acess
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "akash@chatgpt.com"
console.log(JsUser.email);
//  Object.freeze(JsUser) 
JsUser.email = "hitesh@microsoft.com"   //this value not propergate we frezze the value means not assiend bcz we frezze //if i commnt the freeze and run value is frezze
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);   //undefind 
console.log(JsUser.greeting()); // Hello JS user  undefined
console.log(JsUser.greetingTwo());// Hello JS user, Akash    undefined