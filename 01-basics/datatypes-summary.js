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

 
