let arr = [10, "John", false]

// For objects, we use curly braces. For array, we will use square brackets.

let [a, b, c] = arr; // Since on=bjects work on keys, we have to give the key name here; but array does not work on keys rather indexes and so we can give any name to the variables
// So, the first value will get stored inside "a", second value inside "b" and third values inside "c"

console.log("First value of array is: " + a);
console.log(`Second values of array is: ${b}`);
console.log(`Third value of array is: ${c}`);
console.log();

// If we do not store the seond value of array:
let [x, , z] = arr;
console.log(x);
console.log(z); // The third value of the array will get stored inside "z"