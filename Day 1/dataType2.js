// Objects in JavaScript

let person = {
    fname: "John", // This is one key value pair and we can call it as property
    lname: "Doe"
}

console.log("DataType of person is: " + typeof(person));
// Object is a key value pair
// In JS, even arrays are objects
console.log(person);

// Undefined
let myLocation
console.log(myLocation); // undefined when we do not put in any value into any variable

let x1 = 10
console.log("DataType of x1 is: " + typeof(x1));
x1 = "John"
console.log("New dataType of x1 is: " + typeof(x1));
// JS is a dynamic type language
// At run time, it detects the type of the variable 
// In JS array is also an object