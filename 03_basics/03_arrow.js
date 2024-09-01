const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() 
    {
        console.log(`${this.username} , welcome to website`);       //this is a refera current context
        console.log(this);  //print all the code of function
        console.log(".............................................................");
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);      // in node enivorement curennt context is empty {}      // but web window object show
console.log("............................................");

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai()  // undefind bcz you go a function
console.log(".....................Arrow Functuon Example..........................");

// const chai12 = function () {
//     let username = "hitesh"
//     console.log(this.username);          //..............................simple
// }

const chai1 =  () => {    
    let username = "hitesh"
    console.log(this);      
                                             //Arrow Function
}


chai1()
console.log("............................Arrow Function Write.................................");
/**Basic syntax    ()=>{} 
 * if not write returen key word do'nt need a {}, only () or space
*/

const addTwo = (num1, num2) => {            //if write returen key word  used { }
    return num1 + num2
}
//or
 const addTwooo = (num1, num2) =>  num1 + num2  //if do not write returen key word  or

 //or
 const addTwoooo = (num1, num2) => ( num1 + num2 )  //if do not write returen key word () 

//or
const addTwoo = (num1, num2) => ({username: "hitesh"})  // if write a object ued a {}

console.log(addTwo(5,10));
console.log(addTwoo(3, 4))
console.log(addTwooo(5,5));
console.log(addTwoooo(55,45));
console.log(addTwoo());


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()