import {hello, name, age} from "./exportWithoutClasses.js" // "{hello, name, age}" this part is called destructuring. Whenever we want to use a code from one file to another file, technically from one module to another module, we need to use import and export.

// Use:
// In POM (Page Object Model), we will be creating our pages and in pages we will be creating objects. These objects, we will export and we will be able to access the methods of a particular class.

hello("John");

console.log("Imported name is: " + name);

console.log("Imported age is: " + age);