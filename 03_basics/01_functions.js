
function sayMyName()/*PARAMETAR*/{
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}
sayMyName()/*ARGUMENT*/
console.log(".....................Function..........................");
function addTwoNumber(number1, number2){

    console.log(number1 + number2);
}
addTwoNumber(20,30)


console.log(".....................value are print but not returen................................");
function addTwoNumbersss(number12, number22){
    console.log(number12 + number22);
  
}
const result12 = addTwoNumbersss(3, 5)    //value are print but not returen
console.log("Result is a : ", result12);  //op:- result reaturen undefind , or print 8 bcz you print the value buu returen concept is a diffrent


console.log(".....................value are print and  returen................................");
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    //Or
    return number1 + number2
}
const result = addTwoNumbers(30, 50)
console.log("Result: ", result);

console.log(".....................................................");

function userr(userrname) 
{
    return `${userrname} just logged in`
}
userr("akash add a function user name") //the code are run but not exicuted bcz you dont say what are do 
console.log(userr("akash add a function user name"));   // so print the uwerr
console.log(".....................................................");


function loginUserMessaged(username){
    if(undefined===username)
        {
        console.log("PLease enter a username"); // sitution true exucuted
        return
    }
    return `${username} just logged in`         //1st exutied so 2nd one not exicuted bcz using returen
}
console.log(loginUserMessaged());
console.log(loginUserMessaged("Akash"));

console.log(".....................defult are theare......................");

function loginUserMessage(username = "sam"){
    //! exlmetry true convort false , False convort true
    if(!username){
        console.log("PLease enter a username"); // not used bcz bydefult
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) //bydefult
console.log(loginUserMessage("Akash")) //set name


console.log("........................seprated/Rest Operator..............................");
//Rest operator :- Function multiplue value are pass & returen array format
function calculateCartPricee(...num1){
    return num1
}
console.log(calculateCartPricee(200, 400, 500, 2000))

//spraed operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

console.log(".........................Function Pass  a  Object..................................");

const user = {
    username: "hitesh",
    prices: 199
}
                        //user only thid   or anyobject
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);  //op:-Username is hitesh and price is 199
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //bcz you dont pass so undefind so typesafty cheacked //op-Username is hitesh and price is undefined
}
handleObject(user)

console.log("........................direct object also pas......................................");
handleObject({
    username: "sam",    ////direct object also pass
    price: 399
})
console.log("..........................Function pass Array....................................");
//Function pass Array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));