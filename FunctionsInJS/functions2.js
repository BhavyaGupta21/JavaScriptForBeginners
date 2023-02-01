function add(x1 = 0, x2 = 0, x3 = 0) { // We can assign default values to the arguments
    let result = x1 + x2 + x3;
    return result;
}
console.log(add()); // Default value will be assigned to the three parameters
console.log(add(10, 20)); // x1 will have 10, x2 will have value 20 and x3 will have the default value as 0
console.log(add(10, 20, 30));

let fun1 = function hello() {
    console.log("Hello JS");
}
fun1();

// Anonymous fuction
let fun2 = function() {
    console.log("Hello JS again");
}
fun2();

// Arrow function
let fun3 = () => {
    console.log("Hello JS again with Arrow function");
}
fun3();

// Function in single line
let fun4 = () => console.log("Hello JS again with arrow function in single line"); // This can be used only if the function has only one statement inside it. If we have more than one line of code inside a function, we will have to use the curly brackets. Also this won't return anything. We cannot use any return statement inside a single line function.
fun4();