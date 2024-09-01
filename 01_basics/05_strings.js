/*String  
    Write a  2 way  double code & single code
    - ""
    -  ''



*/


const name = "Akash "
const repoCount = 50
//adding & print
console.log(name + repoCount + " Value");
// Backticks Print
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('akash-ac-com')

console.log(gameName[0]);
console.log(gameName.__proto__); //op={}


console.log(gameName.length);    //Returns the length of a String object

console.log(gameName.toUpperCase());    //Converts all the alphabetic characters in a string to uppercase

console.log(gameName.charAt(2));     //Returns the character at the specified index.   

console.log(gameName.indexOf('t'));     //Returns the position of the first occurrence of a substring. or index cheack

console.log(".................................");

const newString = gameName.substring(0, 4)   // value what to what, last value  not count  or Returns the substring at the specified location within a String object.
console.log("Substring is a "+newString);

//akash-ac-com
//0,1,2,3,4,5,6,7,8,9,10,11,12
//-11,-10,-9,-8,-7,-6,-5,-4,-3-2,-1,0

const anotherString = gameName.slice(-8, 4)  // Reverse to Strat count // back to count
console.log("slice string is a"+anotherString);

console.log(".................................");

const newStringOne = "   Akash    "
console.log(newStringOne);
console.log(newStringOne.trim());  // space remove

console.log(".................................");

const url = "https://aakash.com/aakash%20jena"

console.log(url.replace('%20', '-')) // replace the value

console.log(url.includes('sundar'))  // value cheack preasnt or not

console.log(gameName.split('-'));   // String convrt to arrray