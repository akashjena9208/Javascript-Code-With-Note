/**
 * Reduce:- it is used basiccaly shopping cart ,  adding all 
 */
console.log("...............Arrow functin.............................");

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
// accumulator:- 1st time used intial vlue(intial means first value) of cureent array , 2nd time used preasnt result of array
/*ex:-accumulator 0 currentValue 1 o/p-0+1=1
accumulator 1 currentValue 2 o/p-1+2=3
accumulator 3 currentValue 3 o/p-3+3=6
accumulator 6 currentValue  4 o/p-6+4=1
*/
console.log(sumWithInitial);
// Expected output: 10

//or
console.log("..................Simple function .....................................");

const myNums = [1, 2, 3]

const myTotal1 = myNums.reduce(function (acc, currval) 
{
    // value check accumulato & currentValue   so that reason used :- console.log(`acc: ${acc} and currval: ${currval}`);
  console.log(`acc: ${acc} and currval: ${currval}`);
   return acc + currval
}, 0)

console.log(myTotal1);

console.log("..............................arrow function , after used , you give 0 then you not mention intial value  ,this a intial value............................................");

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

console.log("...............Shoping cart all are add:-shoppingCart.reduce((acc, item) => acc + item.price, 0)........................");
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);