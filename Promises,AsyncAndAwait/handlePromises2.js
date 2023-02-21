let square =    function(n) {
    return n*n;
}
console.log(square(2));

let square1 = async function(n) {
    return n * n;
}
console.log(square1(5)); // Here, it will return a promise
// If we have to get the value and not thee promise, we will use "await"

let r1 = await square(5);
console.log(r1);
// "async" resolves the promise. If the promise is successful, we will get the result. USing "await", we are able to get the values