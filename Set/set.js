// Set and Map have been introduced in ES6.

// Set does not allow duplicate values and it does not have indexes

let s1 = new Set();
console.log(s1); // By deault set does not has any value
console.log();

let s2 = new Set();
s2.add(10);
s2.add(10);
s2.add("JavaScript");
s2.add(true);
console.log(s2); // It would remove the duplicate value
// If we have to work with unique values, we must go with "Set", if we have to allow duplicate values, we must use array.
// We will always get array of web elements in automation as values can get replicated
console.log();

console.log("Size of s2 is: " + s2.size); // This will return the size of the set.
console.log();

console.log(s2.has("JavaScript"));
console.log();

s2.delete(10); // This will delete the specific value mentioned
console.log(s2);
console.log();

s2.clear();
console.log(s2); // It will clear the entire set
console.log();

// Iteration in Set
let s3 = new Set();
s3.add(10);
s3.add(20);
s3.add("JS");
s3.add(false);

s3.forEach(e => {

    console.log(e);    
});
console.log();

// Converting array to set:
let arr = [10, 20, 30, 40, 50];
let s4 = new Set();
arr.forEach(e => {
    
    s4.add(e);
});
console.log(s4);