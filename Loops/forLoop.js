// Loops are used to run one task multiple times

// In JS we have 4 kinds of For loops:
// For Loop
// For In Loop
// For Of Loop
// For Each Loop

// Other than this, we have "while" and "do While" loops as well

// Syntax:
// for(initialization; condition; increment/decrement)
// {
// Block of statements
// }

for (let i = 0; i < 10; i ++) { // We can also write "i ++" as "i = i + 1"
    console.log("Value of i is: " + i);
}

console.log();

for (i = 0; i < 10; i = i + 2) {
    console.log("Value of i is: " + i);
}

console.log();

for (let i = 100; i > 10; i--) {
    console.log("Value of i is: " + i);
    
}

console.log();

for (let i = 0; i < 3; i++) { // Outer for loop can control inner for loop
    for (let j = 0; j < 3; j++) {
        console.log(i + " " + j);
    }
    console.log();
}