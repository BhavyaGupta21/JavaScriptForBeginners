console.log("Is 5 equal to 5: " + (5==5)); // we can also use ",", comma in place of "+" for concatenation of string and the operation
console.log("Is 5 equal to 6: " + (5==6));
console.log("Is numeric 5 equal to 5 within a string: " + (5=='5')); // This is implicit conversion, if we have the same content but in different dataType, JS will focus on the content
console.log("Strict equal of numeric 5 and 5 within a string: " + (5==='5')) // This is used to check the content and the type both

console.log("Division operator: " + (5/2));
console.log("Division by zero: " + (5/0));
console.log("Modulus operator: " + (9%2));

console.log("Less than operator: " + (10 < 2));
console.log("Greater than operator: " + (10 > 2));

console.log("Negative division: " + (-3 / 2));
console.log("Negative division by zero: " + (-3 / 0));