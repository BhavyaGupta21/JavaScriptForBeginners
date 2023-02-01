// Function is the set of statements that are grouped together and can be called as and when needed

// Main reason of creating a function is its reuseability

// We need to call a function in order to run it

//Syntax
// function functionName () { // This is a non parameterised function
// 
// }

// function add (n1, n2) { // Parameterised function
// console.log (n1 + n2)
// result = n1 + n2 // Any variable that is defined inside a function will only be accessible inside that function and not outside it.
// return result // It returns the value stored in result variable which needs to be stored in any variable on calling the function
// }
// add(10, 30) // Calling add function
// Suppose, we pass add (10, "20") as the 2 parameters, then the DataType of n2 becomes string and we get "1020" as the output as it concatenates the two values

// Function expressions:
// JS says that we can store any function inside a variable
let x = function add() { // x becomes an object here. This is non-parameterised function
    console.log(10 + 20);
}
x(); // calling the function add
console.log();

let y = function add(a, b, c, d) { // This is a parameterised function
    console.log(a + b + c + d);
}
y(10, 20, 30, 40);
// Here, we can see that add is an additional keyword in both the functions and hence, we can remove it and the final code will look like:
let x1 = function () { // This is called anonymous function

}
// JS also says that if you have the brackets on, then we know that this is obviously a function and so no need to write the keyword "function" and then it will become an arrow function:
let x2 = () => { // This is the arrow function

}
x2(); // Calling an arrow function is similar to the other ones

function sum (a, ...b) { // These dots represent the variable arguments

}
sum(10, 20, 30, 40, 50) // Here 10 will be stored inside "a" and the rest of the values will be stored in "b" as array. no matter how long the list goes, everything will get stored inside "b"

function add() {
    console.log("Result is 20");
}
add(); // This will call the function
console.log(add()); // Here first it will call "add()" function. since we are not returning anything from the "add()" function and hence the console.log statement will show undefined inside it.
console.log(typeof(add));
console.log();

function add(x1, x2, x3) {
    let result = x1 + x2 + x3;
    return result;
}
console.log("Sum of the numbers is: "+ add(10, 20, 30));
console.log(add()); // If we call the function that expects some parameters without any parameter, then it will show "NaN" 