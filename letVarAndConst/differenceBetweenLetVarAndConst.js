// First difference between var, let and const:
var a = 10;
var b = 20;
console.log(a);
console.log(b);
// We used to use "var" previously in JS, in the latest versions of JS we use "let" and "const"

var c = 30;
var c = 40;
console.log(c); // We are able to re-declare the same variable and able to update the value as well
// "var" is very raw. Anybody can re-declare the same variable and anybody can update the value in the same variable

let d = 50;
// let d = 60; // This will not allow because we cannot re-declare block-scoped variable, but we can update the value of that variable
console.log(d);
// So, "var" can be re-declared and updated, but "let" cannot be re-declared but it can be updated.

d = 60;
console.log(d);

const e = 70;
// const e = 80; // This also won't be allowed. Since "const" cannot be re-declared and cannot be updated as well.
console.log(e);
// e = 80;
console.log();

// Second difference between var, let and const
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // we are able to access "i" outside the "for" loop, but this is not the case with "let"
console.log();

for(let j = 0; j < 5; j++) {
    console.log(j);
}
// console.log(j); // We won't be able to access "j" outside the "for" loop. This will throw the "ReferenceError" as "j" will not be defined.
console.log();

for(const k = 0; k < 5; k++) {
    console.log(k); // This will only print "0" and then give the "TypeError" as value in a "const" variable cannot be changed.
}

// var can be accessed outside the block but let and const can only be accessible inside the block

// Last difference
var x1;
let x2;
// const x3; // We cannot leave const declared, we will have to initialize the declared const variable.

console.log(x1);
console.log(x2);
// console.log(x3);

// "var" and "let" will have values undefined and "const" will have to be initialized