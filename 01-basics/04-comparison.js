// console.log("2">1);
// console.log("02">1);

console.log(null > 0); // == and > < >= <= work differently
console.log(null == 0); // comparison convert null to a number treating it as a 0.
console.log(null >= 0); // that's why null >= 0 true and null > 0 false

// console.log(undefined == 0); => false
// console.log(undefined > 0);  => false for both > , <

// === strict check i.e it also check the datatype
console.log("2" === 2);

