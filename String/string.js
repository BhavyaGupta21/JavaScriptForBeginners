let str = "This is my first JS Program. Fee is 200 USD." // String is a sequence of characters
let str2 = "    This is my first JS Program. Fee is 200 USD.    "

// String has very many pre-defined functions. If these functions have paranthesis "()" after them, then it is a method and if not set of paranthesis is present, then it is just a property
console.log("Character at 0th position is: " + str.charAt(0)); // Gives us character at the specific defined position

console.log("Length of the string is: " + str.length); // It will also count the spaces

console.log("To check if the string starts with the entered value: " + str.startsWith('This')); // Will return a boolean. It is case sensitive.
console.log("To check if the string ends with the entered value: " + str.endsWith('USD'));

console.log("To convert the string to uppercase: " + str.toUpperCase());
console.log("To convert the string to lowercase: " + str.toLowerCase());

console.log(str); // String is immutable. It does not gets changes once it is defined

console.log("To check if the string includes the entered value: " + str.includes("USD")); // All these methods and properties are case sensitive.

console.log("To replace a specific character: " + str.replace("USD", "INR"));

console.log("To trim the spaces at the beginning and the end of the string: " + str.trim());
console.log("To trim the beginning space of the string: " + str.trimStart());
console.log("To trim the end space of the string: " + str.trimEnd());

console.log("To split a string using specified sperator: " + str.split(" ")); // It splits a string into substrings using the specified separator and return them as an array. Array works on indexes.
console.log(str.split(" "));
console.log("To get the value at specific index after splitting: " + str.split(" ")[1]);

// To comapre 2 strings
let s1 = "Hello JS"
let s2 = "Hello JavaScript"
let s3 = "Hello JS"
console.log(s1.localeCompare(s3)); // It is case sensitive
console.log(s1.localeCompare(s2)); // IT will return 3 values: 0, 1 and -1
// If we get 0: The two strings are same
// If we get 1 or -1, the two strings are not same