// a = 5
// console.log(a); // This will give the ReferenceError as we have not defined what is "a"

b = 10;
console.log(b);
var b; // Hoisting: It is the behavior of JS in which we can access any variable and a function before even declaration
// This only works with "var", it won't work with "let". Using "let" we will end up getting "ReferenceError" again
// "const" is very simple, we will have to initialize the "const" variable even at the time of declaration

show();

function show() {
    
    b = 5;
    console.log("This variable is inside the function: " + b);
    var b;
}

// Here is a small catch. If we use function as an expression, in that case, we will be getting an error.

// f1(); // If we have fucntion as an expression and we try accessing it before declaration, we will get "ReferenceError"
let f1 = function() {
    
    console.log("I am inside function f1");
}

f1();