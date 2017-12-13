// function addTwoNumbers(value1, value2) {
//     if (typeof value1 == "number" && typeof value2 == "number") {
//         return value1 + value2;
//     }
//     else {
//         return "Invalid entry";
//     }
// }
// console.log(addTwoNumbers(8, 9));

// if (true || false){
//     return console.log("true");
// }
// else {
//     return console.log("false");
// }

// let myString = "Hello";
// let myOtherString = myString;

// myOtherString = "World";

// console.log(typeof myString);
// console.log(typeof myOtherString);

const defParam = (a, b = 20) => a * b;

console.log(defParam(3, 5));
console.log(defParam(6));