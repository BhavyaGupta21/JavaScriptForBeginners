// In callback we will pass function as an argument
function show() {
    console.log("Hello JS");
}
show();

// Passing normal arguments
function show1(a, b, c) {
    console.log("Value of a, b and c is: " + a + ", " + b + ", " + c + ", respectively");
}
show1(10, 200, 30);

function show2(value, result) {
    console.log("Hello " + value);
    console.log("Result is: " + result);
}
show2("JS");

// Callback function: Passing function as an argument
function sum(a, b, c, callBackFunction) {
    let result = a + b + c
    console.log(result);
    callBackFunction("JS", result); // Callback function means that first it will call the previous fuction and once it is done, it will call the next function
}
sum(500, 600, 700, show2) // When we pass function as an argument, we don't have to put pair of parenthesis and just pass the name of the function
