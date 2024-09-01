const score = 400
console.log(score); //spicific number type  op:-400  but
console.log(".................................");

const balance = new Number(100)     //new (value?: any) => Number //  but in this case  op:-[Number: 100]
console.log(balance);
console.log(".................................");
console.log(balance.toString())         //  itz is methode  and Type of string // Now you used all string property

console.log("................................");
console.log(balance.toString().length); // convort to string and you  using all string proerty
// it is used for long bill maximum number of Precision value so  decrised 
console.log(balance.toFixed(1));    //100.0
console.log(balance.toFixed(2));    //100.00

console.log("............Presize  value need value get  round off.....................");
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digit  Number of significant digits. Must be in the range 1 - 21, inclusive.
const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(4))    //1124
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));    //123.9
const otherNumber1 = 23.8966
console.log(otherNumber1.toPrecision(4));   //23.90

console.log(".................................");

const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN')); // indian rupess 10,00,000
 console.log(".................................");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("+++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++");

console.log(Math);  //Object [Math] {}

console.log(Math.abs(-4));  //-VE VALE CHANGE TO +VE
console.log("........ROUNDONG THE VALE......");
console.log(Math.round(4.6));   
console.log(Math.ceil(4.2));    //increse
console.log(Math.floor(4.9));   //decrise
console.log("Finde the mini mum number and maximum number");
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // the value are given   0 to 1 ex:-0.693721400150032,0.1771143351644906
console.log((Math.random()*10)); // left side value shift to right ex:-1.5708526470594353,0.03434954255832512   // value also get a zero so used +1
console.log((Math.random()*10) + 1);// value also get a zero so used +1 op"-9.918452849296765,3.0628560775632376,2.5482701208563996
console.log((Math.random()*10) + 1);// used bracket saftly console not confufued whic one was 1st exicuted 
//fllor round off lowest
console.log(Math.floor(Math.random()*10) + 1); 
// vaule are need 10 to 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)