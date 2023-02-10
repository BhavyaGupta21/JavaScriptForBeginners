// In order to export, it is not mandatory to use only classes. We can just export a single variable also or any function etc.

// We have 2 different syntaxes for import and export:
// One is using "require" which is in the older versions of JS. Couple of libraries still use "require". After ES6, we have import and export.

export function hello(name) { // This is used to export a particular function
    console.log(`Hello ${name}`);
}

export let name = "Cypress"

export let age = 30;

// In order to export any property, we need to add a "package.JSON" file to our the complete project and not any folder separately.