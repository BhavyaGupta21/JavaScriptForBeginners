// In JS, everything is error.

// Any abnormal condition which can terminate the program will fall under exception. In JS, we have a built-in object called error which is the parent of all kind of errors.

// In case we gracefully want to handle this error, we use Exception Handling so that program should not stop/terminate and continue with the next set of statements.

// We handle exception using the try, catch finally blocks. These try, catch and finally are keywords in JS but when code inside them is surrounded by brackets, they are called tr block, catch block and finally block.

// In JS, we don't have multiple catch blocks and we have to handle all kind of exceptions in single catch block.

// What ever piece of code throws error, we keep it inside "try" block. Whatever execption we get, we will store it inside a variable in "catch" block.

// If we want to get the name of the exception, we can get it by ".name" and exception message by ".exception" using the name we gave to the error and if we want to write a custom message, we can do it by writing inside console.log in the catch block.

// Finally block will always execute no matter if we get the exception or not. Finally block is optional but it is good practice to have a finally block.

// One advantage in Cypress is that it handles all the exception by itself and it throws promise errors if the errors are not getting resolved.

// In PW and WDIO, we can handle the exception by using "try and catch".

// In "finally" we write somthing which will release the resources which is mandatory. For ex, we have opened a file and used some data from it and we want to close it. We will write the code inside finally, or any DB connections which are currently in use and we want to close it, we will keep it under finally.

//Whener we have to throw an exception that is user defined, amybe we want to throw some exception based on certain conditions, we use "throw" keyword.

let fname = "JavaScript"
console.log(fname.toUpperCase());
console.log("Bye");

try {
    let num1 = 10;
    console.log(num1.toUpperCase()); // This will throw TypeError
    // All the information that we get inside the terminal is called "trace" related to the exception
}
catch (err) { // All the information will get stored inside  this variable "err"
    console.log("Please use only string");

    console.log("Name of the error is: " + err.name);

    console.log("The message for this exception is: " + err.message);

    console.log(err); // It prints everything inside err.
} // The moment we have any exception, it is getting inside catch and printing the content inside it.
finally { // This block will get executed no matter, if we get the exception or not
    console.log("Bye again from finally block");
}


// Whatever piece of code is throwing error, we need to surround it by try block and with one try block, we need at least one catch block.