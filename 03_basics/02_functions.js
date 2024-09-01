/* Function in JavaScript  :- It is always reused bulty of data, Function Is a First classs Citizon
Argument:- Function calling & DataPass
Paramtter:-Funaction add & Declared 

*/
//1
function add() 
{
    console.log(5+5);  
}
add()
//2
let a= 10;
let b= 20;
function add1() 
{
    console.log(a+b);
}
add1()
//3
 function add2(a,b)
 {
    console.log(a+b);
 }
add2(50,50)

//4
console.log("....................................Function Store varibale...........................");
const sum = function twonumberadd(c,d) 
{
    console.log(c+d);
    
}
sum(10,20);

console.log("..........................................function inside Function.....................");

function x(callbackplz)
{
    console.log("Hello");
    callbackplz();

}
function y() 
{
   console.log("Bye"); 
}
x(y)

console.log("..............................Function With returen.....................................");

function added(num1,num2)
{
    return num1+num2
}
console.log("value is a ",added(700,300));


function adding(m,n) 
{
    const res = m+n;
    return res
}

const value = adding(70,60)
console.log(value);


console.log(".....................................Function With parametar..................................................");
// function with Single parametar
function grade(name) 
{
    console.log(`Hello ${name} yor 1st Function name `);
    
}
  grade("Akash");

  //function with Defult parametar
console.log(".......function with Defult parametar............");
function gradey(name="akash") 
{
    console.log(`Hello ${name} yor 2st Function name `);
    
}
  gradey();
  gradey("jena")



//Function with multipule paramteer
function multi(a,b) 
{
    return a+b
    
}
console.log(multi(10,10));

//array pas
//object pass


