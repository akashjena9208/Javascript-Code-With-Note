// Object litral
//this key word call a current context
//new key word used a instaly creata a New context
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
// const userOne =  User("hitesh", 12, true)
// const userTwo =  User("ChaiAurCode", 11, false)
//console.log(userOne)
// if don't used a new ky word code are overide

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
//console.log(userOne);
//console.log(userTwo);
console.log(userOne.constructor);   // constructor also avilable
