// Syntax:
// do {
// set of statements // These statements will run at least once
// Increment/Decrement;
// } while (condition)

let num = 1;

do {
    console.log("Value of number is: " + num);

    num++;
} while (num < 10)

console.log();

let num1 = 100;

do {
    console.log("Value of number is: " + num1); // It will run once and then check the condition. If it is true, it continues otherwise gets terminated.
} while (num < 10)