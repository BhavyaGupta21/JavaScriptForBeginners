let arr = [10, 20, 30, 40]

// "for of" loop
for (let x of arr) {
    console.log(x); // every time we print value of x, it will pick one value from the array and print it.
}
console.log();

//"for in" loop
for (let x in arr) {
    console.log(x); // "For in" loop will work here as well but instead of key unlike objects, it will return indexes of the array.
}
console.log();
for(let x in arr) {
    console.log(arr[x]);
}