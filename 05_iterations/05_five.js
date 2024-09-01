const coding = ["js", "ruby", "java", "python", "cpp"]
//foreach call back so not write function name

// coding.forEach( function name(val){
//     console.log(val);
// } )
console.log("..... function call back...........");
coding.forEach( function (val){
    console.log(val);
} )

//or
console.log(".....Arrow function call back...........");
coding.forEach( (item) => {
    console.log(item);
} )
//or

console.log("...........function inside  function pass..........");

function printMe(item){
    console.log(item);
}
// function inside function pass
// only give refrence (printMe) not exicuted  (printMe())
coding.forEach(printMe)

console.log("inside not only value pass a index, pass Full array");

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
// inside array pass a 3 object & that aray store varibale 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
  // inside the array object iterated
myCoding.forEach( (item_value) => {
  
    console.log(item_value);
    console.log(".......Inside the array iterated a Object........");
    console.log("Object of Lang name:-",item_value.languageName);
} )