// We have 2 types of dataTypes: Primitve and Non Primitive

// Number
let num1 = 20
console.log("Value of number 1 is: " + num1)
console.log("DataType of number 1 is: " + typeof(num1)); // This "typeof" function tells the datatype of the passed variable
console.log();

let num2 = 20.5
console.log("Value of number 2 is: " + num2);
console.log("DataType of number 2 is: " + typeof(num2));

// In JS we don't have byte, short, int, long etc. We have number as a datatype here
// We also have a datatype called big int
console.log();

// String
let fname = "John" // We can store a string within double quotes in JS
// String is a series of characters or a sequence of characters
console.log("Value in fname is: " + fname);
console.log("DataType of fname is: " + (typeof(fname)));
// We can also give a string inside single quotes

// Boolean
let myStatus = true
let newStatus = false
console.log("My Status is: " + myStatus);
console.log("Type of my status is: " + typeof(myStatus));
console.log("My new Status is: " + newStatus);
console.log("Type of my new Status is: " + typeof(newStatus));
// Here we don't have to explicitly mention the dataType of the variable but it picks the dataType according to the value it has