//Array are adding
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// Array inside array add
marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);
console.log("................Concart..............................");
//Combines two or more arrays. This method returns a new array without modifying any existing arrays. 
// limitation only one time  but spred operator 

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
//or
console.log("....................Spead operator..........................");
const all_new_heros = [...marvel_heros, ...dc_heros]
 console.log(all_new_heros);
 console.log("..............................................");


// all are combine single array
 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log("...............Data scrpting ...............................");

console.log(Array.isArray("Akash"))  // it is cheack array or not
//Creates an array from an iterable object.
console.log(Array.from("Akash"))    //any format to convort to array

console.log(Array.from({name: "Akash"})) // interesting     // not convort to array bcz you spicific say key or value which one convort so empty  op:-[]
         
//set of element
let score1 = 100
let score2 = 200
let score3 = 300
//Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3));   //Returns a new array from a set of elements // multipule vale are convort to array
