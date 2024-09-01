const coding = ["js", "ruby", "java", "python", "cpp"]

// Value not returen a for each loop
// 
const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log("varibale value :-",values);

console.log("..............Filtter..................");
/**
 *-  for each value doses not returen 
 *-  filter value returen
  - inside the callback function there  all value each acess then you get a condition
  ex:- ()=>{ Condition }
 */

// filiter  call back functon
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("............finde value grter then 4...........................");
const nums=myNums.filter( (nom)=> nom>4)
console.log(nums);

console.log("...filter   value is a returen..... but for each does not returen");


const newNums = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNums);

console.log("................same work with out using filter  used a  foreach............................");

const newNums1 = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums1.push(num)
    }
} )
console.log(newNums);
 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
    console.log(userBooks);
console.log("...........vale retren and condition apply.................");

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);

/*
console.log("...........Simple function.................");
let red=books.filter( function (bk) {
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(red);

*/ 