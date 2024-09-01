// array :store order of list of element in contigoues memory,
//any elemnt store  ex:number,object, array..

//using sq bracket
const myArr = [0, 1, 2, 3, 4, 5]     

const myHeors = ["shaktiman", "naagraj"]

//using constatctor array
const myArr2 = new Array(1, 2, 3, 4)

//uing litrial
let mitter =Array("aku",true,10,{name:"john"})


console.log(myArr[1]);
console.log(myHeors[1]);
console.log(myArr2[1]);
console.log(mitter[3]);
console.log("........................");
// Array methods

 myArr.push(6) //Adding new elements to the end of an array
 myArr.push(7) 
 myArr.pop() //Removes the last element from an array

myArr.unshift(9)     //Inserts new elements at the start of an array
myArr.shift()       //Removes the first element from an array


 console.log(myArr.includes(9)); //array include or not  cheack
 console.log(myArr.indexOf(3));     // index value are give // not there -1

console.log(".................................");
const newArr = myArr.join() //Adds all the elements of an array into a string   // bind all the array or( combain all array ) and convort to string
 console.log(myArr);
console.log( newArr);

console.log("..........slice, splice.......................");
// slice, splice 
//slice :-last value are not include

console.log("Before Usung Slice :-  ", myArr);

const myn1 = myArr.slice(1, 3)

console.log("After using slice: -  ", myn1);
console.log( "Old array",myArr);


const myn2 = myArr.splice(1, 3)
console.log( myArr);
console.log("After Usung Splice ",myn2);
