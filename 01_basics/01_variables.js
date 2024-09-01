const accountId = 144553
// accountId = 2 // not allowed bcz const not change
let accountEmail = "akash@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // value not defind

// print a table form
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



// js automatic know which type of data
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.log(accountEmail);

/* .................................................Note..................
Prefer:....> not to use "var" because of issue in block scope and functional scope
*/


