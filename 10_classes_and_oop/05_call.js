
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
   // this.username = username
    SetUsername.call(this, username)
   // refrence hold time used call
   // this optinally used that (this, username)  apana this is dlt so used  anther this
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);