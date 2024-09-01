const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("............Ading a 10.....................");
//map is also call back function,
//map automatically retren
// if you used{} zo used returen keyword
const newNums = myNumers.map( (num) => {  return num + 10})

console.log(newNums);

// chaning:- 2,3.. methode used simiotensoly

const newNums1 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums1);



