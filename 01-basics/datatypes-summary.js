// Primitive datatype

// 7 types : String, Number, Boolean, null, undefined, symbol

// 


const Id = Symbol('12')
const UserId = Symbol('12')
console.log(Id === UserId);
//  typeof Symbol => symbol
// Reference type(Non-primitive)

// Array, Objects, Functions
const heroes = ["dhumketu","Bheem", "Kaalia"];
 // => typeof non-primitive is always function(also known as function object)
let myObj = {
  name: "Raghav",
  age: 22,
}

const myFunction = function(){
  console.log("Raghav");
  
}

 // ******* MEMORY *******

 // Stack(PRIMITIVE)=> callby value , Heap(NON-PRIMITIVE)=> callby reference

 let myYoutube = "Raghav.com"

 let anotherName = myYoutube
 anotherName = "Chai"
 console.log(myYoutube);
 
 console.log(anotherName);

 let userOne ={
  email: "user@com",
  upi: "upi@sbi",
 }
 
 let userTwo = userOne

 userTwo.email = "Raghav@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 
 
