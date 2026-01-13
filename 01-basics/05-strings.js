const name = "Raghav"
const repoCount = 3

// console.log(name + repoCount + " Value");

// backticks=> string iterpolation: in this we create place holders
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

// string declaration
const gameName = new String('Raghav-ch') // => object
// console.log(gameName[0]);  // =>o/p = R :in this values are stored in term of key: value
// console.log(gameName.__proto__); // =>{}
//  strings are immutable in JS
//  toUpperCase returns only the new string it doesn't change the original string
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('a'));
 const NewString  = gameName.substring(0, 4) // last value not included i.e. value of index of 4
 console.log(NewString);

 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString); // onlys slice accept negative range values

 const newStringOne = "  Raghav  "
 console.log(newStringOne);
 console.log(newStringOne.trim()); // applicable for white space or line terminators(/n)
 console.log(newStringOne.split('gh'));
 
 const url = "https://Raghav.com/Raghav%20yadav"

 console.log(url.replace('%20','-'))

 console.log(url.includes('cheetah'));


 
 

 
 

 
 



