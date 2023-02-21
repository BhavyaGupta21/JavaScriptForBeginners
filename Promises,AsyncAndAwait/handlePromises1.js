let f1 = function() {
    return "I am in f1";
}

let f2 = function() {
    
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("I am in f2");
        }, 5000)
    })
}

let f3 = function() {
    return "I am in f3";
}

let callAllFunction = function () {
    let r1 = f1();
    console.log(r1);

    let r2 = f2();
    console.log(r2);

    let r3 = f3();
    console.log(r3);
}
console.log();

callAllFunction();
// Since we have created a new Promise and hence it shows its state that is "pending" and it runs the 3rd function. After 5 seconds the promise got resolved but it did not do anything.
// Here we can tell explicitly that f2 is important and we will have to wait until the f2 is not completed successfully

let callAllFunction1 = async function() {
    let r1 = f1();
    console.log(r1);

    let r2 = await f2(); // the moment we use "await", we will have to use "async" as well, if we do not use "async", we will get a "SyntaxError".
    console.log(r2);

    let r3 = f3();
    console.log(r3);
}
callAllFunction1();