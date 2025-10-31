//Single tone Object using  new key word or constactor
// Example :- const tinderUser = new Object()  or   Object.create


// Using new Key Word
//const tinderUser = new Object()

//..................................Or..........................................
// it is a not singletone
const tinderUser = {}
// USing Constarctor
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

// Object Inside Object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Akash",
            lastname: "Jena"
        }
    }
}
// How to acess
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);
//console.log(regularUser.fullname?.userfullname.firstname);    using protection "?" value exit to run nether used if else
console.log(".................... properly Not Combine ...........................................");

// Object combine
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//add
const obj13 = { obj1, obj2 }  // Not properly Combine same arrya type problem  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj13);
console.log("...........................Sepaterd & Combine Properly :- 2 way do that ....................................");


// Separet the object then no problem , Combine Properly
                            //{}:- target, // obj1,obj2.... Source

//const obj113 = Object.assign(obj1, obj2, obj4)//  we do  this type but if we used {} it is good approach 
 const obj113 = Object.assign({}, obj1, obj2, obj4)
 console.log(obj113);
 //OR

const obj3 = {...obj1, ...obj2} //spred 
console.log(obj3);
console.log("..................... How data come to Databse this the example..........................................");

// Databse to come to data that type 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "hk@gmail.com"
    },
]
// Acess the data of database array example
// in databse data come as from of array 
users[1].email // tinedder value chack

console.log("................tinder user acess .......................................");
console.log(tinderUser);

console.log("....................Only key Acess & Data Type is a Array...................................");
// Only key Acess & Data Type is a Array
console.log(Object.keys(tinderUser));
console.log("......................Only value Acess & Data Type is a Array.................................");
// Only value Acess & Data Type is a Array
console.log(Object.values(tinderUser));
console.log(".......................................................");
// both key & value Acess & Data Type is a Array
console.log(Object.entries(tinderUser));
console.log("........................property avilabe chacked...............................");
// property is  avilabe or not  chacked
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(".......................................................");



//----------------------------------------DeStructer------------------------------------------------------------------------------------------------------------



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "akash"
}
console.log("---------------------------Multipule Time We Write same thing-----------------------------------------");
// When reperted time used we  print multipule time same line  so instace of this used 
console.log(course.courseInstructor);
console.log(course.coursename);
console.log(course.price);
console.log("-------------------Insatce of this  another syntax is -----------------------------------------------------------------------");
const {courseInstructor}/*name big so chaged the name*/ = course //where value extraxt we extract in course
    //which value extract{ }                            =  where  value extract
console.log(courseInstructor);
const {courseInstructor: instructor} = course
    // name big so we can chaged the name
console.log(instructor);


// const navbar= ()=>
// {

// }
// navbar(companyname= "Akash pvt ltd")

//in react  by defult propes presant only understnd propuse // ❌ wrong syntax  // ❌ wrong way to pass props in this example

                        // const navbar= (props.companyname) = >
                        // {
                        // }
                        // navbar(companyname= "Akash pvt ltd")


 //instce of we not write type write  to destrure way 
                        // const navbar= ({companyname}) = >  
                        // {
                        // }
                        // navbar(companyname= "Akash pvt ltd")   

// ...................................correct way  
// Basic Example
function Navbar(props) {
  return <h1>Welcome to {props.companyName}</h1>;
}
export default function App() {
  return <Navbar companyName="Akash Pvt Ltd" />;
}

//Using Destructuring (Cleaner way)
function Navbar({ companyName }) {
  return <h1>Welcome to {companyName}</h1>;
}
export default function App() {
  return <Navbar companyName="Akash Pvt Ltd" />;
}





///Same destruced used  used array  also 


/* Api  write 
no write any thing , object write value  both key & value are String
{
    key:value  
}
*/
// Api json form
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// api array form
[
    {},
    {},
    {}
]
