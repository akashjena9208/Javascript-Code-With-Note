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
const obj13 = { obj1, obj2 }  // Not properly Combine { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj13);
console.log("...........................Sepaterd & Combine Properly :-2 way....................................");


// Separet the object then no problem , Combine Properly
                            //{}:- target, // obj1,obj2.... Source
 const obj113 = Object.assign({}, obj1, obj2, obj4)
 console.log(obj113);

 //OR

const obj3 = {...obj1, ...obj2}
console.log(obj3);
console.log("..................... How data come to Databse this the example..........................................");

// Databse to come to data that type 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// Acess the data of database array example
users[1].email // tinedder value chack
console.log(".......................................................");
console.log(tinderUser);
// Only key Acess & Data Type is a Array
console.log(Object.keys(tinderUser));
console.log(".......................................................");
// Only value Acess & Data Type is a Array
console.log(Object.values(tinderUser));
console.log(".......................................................");
// both key & value Acess & Data Type is a Array
console.log(Object.entries(tinderUser));
console.log("........................property avilabe chacked...............................");
// property avilabe chacked
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(".......................................................");

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "akash"
}

course.courseInstructor // reperted time used you print multipule time

//So Used 

const {courseInstructor}/*name big so chaged the name*/ = course
    //what value abstarct{ }           =  which value abstarct
    
console.log(courseInstructor);
const {courseInstructor: instructor} = course
    // name big so chaged the name
console.log(instructor);

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
