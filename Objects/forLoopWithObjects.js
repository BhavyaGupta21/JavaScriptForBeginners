// Whenever we have to use for loop in objects, we will be using "for in" loop. "for of" will be used when we have strings, arrays, numbers etc

let person = {
    fname: "Cypress",
    lname: "Automation",
    age: 30,
    phone: [1234, 5678, 9012, 3456]
}

// for in loop
for (let key in person) {
    console.log(key + ": "); // This will print only the key
    console.log(person[key]); // This will print the value. Whenever we use "for in" loop, we have to use bracket annotation, dot annotation does not work here.
    console.log();
}

delete person // We will not be able to delete the entire object at once.
console.log(person); // We will still be able to get the object