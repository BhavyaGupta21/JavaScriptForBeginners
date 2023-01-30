// Syntax: 
// while (condition) { This condition can either be "True" or "False"
// Set of statements // Till the condition is "True", while loop will continue to run these statements and once it is false, it will come out of the loop
// Increment/Decrement;
// }

// while(True) {
// Set of statements // This will run infinite times as the condition will never be false    
// }

let num = 1;

while(num <= 10) {
    console.log("Value of number is: " + num);
    num++;
}
console.log();

while (true) {
    console.log("Hello"); // Infinite Loop. To come out of the loop: Press "Ctrl + C"
}

console.log();

let num1 = 1;

while (num1 < 10) {
    console.log("Hello");
    num1++;
}