const account_Id = 1445
let account_Email = "raghav@google.com"
var account_Password = "12345"
account_city = "Jaipur" // variable can be declared like this in memory but not an appropriate way
let account_State; // value not declared i.e output is undefined
// account_Id = 2 // not allowed
account_Email = "rao@13"
account_Password = "2212"
account_city = "Mumbai"
console.log(account_Id);

/*
prefer not to use VAR
because of issue in block scope and functional scope
*/
console.table([account_Id,account_Email,account_Password,account_city,account_State])

 // const me fixed hai
 