// for_of loop used array, String, Object

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//for (const iterator of object)

//ex:1
for (const num of arr) {
    console.log(num);
}
console.log("..........................");

//ex:2
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
console.log("..........................");
// Maps :- unique value added and Homogenoues(Order wise)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
console.log("..........................");
for (const key  of map) {
    console.log(key);
}
console.log(".......Array destruter key and value difrent difrent print...................");
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
console.log("............Object..............");
//Object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
//for of not run a Object
// not exicuted in this format  so used for in
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }