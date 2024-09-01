const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
console.log("......Only Key............");

for (const key in myObject) {
    console.log(key);
}
console.log("......Only object............");
for (const key in myObject) {
    console.log(myObject);
}
console.log("......Key & Object ............");

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

console.log("......for in work a  Array............");
// for in give a key
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
}
for (const key in programming) {
    console.log(programming[key]);
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }