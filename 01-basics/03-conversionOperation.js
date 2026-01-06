let score = "33abc"
/*
in case if I use
let score ="33abc"
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
then the output will NaN i.e. console.log(typeof valueInNumber);
Nan stands for not a number

Case 2 if give the vlue of score as null
=> like let score = null
then the output will be 0
object for typeeof score and number for typeof valueInNumber
and if i want output for console.log(valueInNumber); after giving score as null
then the output will be 0

Case 3 if give the value of score as undefined
=> like let score = undefined
then the output will be
undefined
number
NaN

Case 4 if give the value of score as boolean
=> like let score = true
then the output will be
boolean
number
1
*/
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


let LoggedIN = 1;
console.log(typeof LoggedIN);
let BooleanIsLoggedIN = Boolean(LoggedIN);
console.log(typeof BooleanIsLoggedIN);
// 1 => true
// 0 => false
// "" => false
// "Raghav" => true