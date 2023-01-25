let num1 = "3"
let num2 = 3
let num3 = num1 + num2
console.log("Value of num3 is: " + num3);

let num4 = "30"
console.log("num1 + num4 = " + (num1 + num4));
 // "+" operator changes its behavior based on the datatypes

 let n1 = 3 + 30 + 300 + 'John' // For the first 3 oprands it will do additon and for the last operand, it does the concatenation
 console.log("Value of n1 is: " + n1);

 let n2 = 'John' + 3 + 30 + 300 // Since the first operand is a string, it would just do the concatenation operation
 console.log("Value of n2 is: " + n2);

 let x1 = '4' - true // Here it does the explicit conversion and it considers true as 1 and does the subtraction 
 console.log("Value of x1 is: " + x1);

 let x2 = '4' + false // Here it does the concatenation operation
 console.log("Value of x2 is: " + x2);

 let num5 = "33"
let num6 = "3"
let num7 = num5 - num6 // JS understands that we can perform subtraction only with numbers and so it explicitly converts the dataType of the variables and performs the operation   
console.log("Value of num7 is: " + num7);

console.log("Division of string by a number: " + ("John" / 0)); // NaN: Not a Number

console.log("Subtraction of string by a string: " + ("John" - "Doe"));