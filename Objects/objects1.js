let person = {
    fname: "John",
    age: 25,
    phone: [12345, 67890, 098765]
}
console.log(person);
console.log();

// To add another property in an object
person.status = false;
console.log(person);
console.log();
person.status = true; // It will take the last value (overwrite the pervious value)
console.log(person);
console.log();

// JS does not allows to dete the entire object, we need to delete the property. It does not bother about the dataType of the key, any key that will be provided to get delete, will get deleted.
delete person.phone; // We can go with the dot notation or the bracket notation as well
console.log(person);
console.log();

// To update:
person.fname = "Doe"
console.log(person);
console.log();

let person1 = {
    skill: "JS",
}

person.skill = person1; // Nested object
console.log(person);
console.log();

// Function inside object
let person2 = {
    fname: "Cypress",
    lname: "Automation",
    age: 30,
    f1: function() { // Anonymous function
        console.log("This is a function inside an object f1");
    },
    f2: (num1) => { // Arrow fuction
        console.log("This is another function inside an object f2 and the number passed as parameter is: " + num1);
    }
    // If we have two functions with the same name, the second function will get triggered every time as it will overwrite the previous function
}
console.log(person2);
person2.phone = [1234, 5678, 9012, 3456];
console.log(person2);

person2.f1(); // Calling a function that is inside an object
console.log();
person2.f2(20); // IF we do not pass any value inside the function while calling it, we will get output as "undefined"
console.log();

// Below are all the key value pair of different dataTypes that can be used inside an object
let person3 = {
    fname: "John",
    age: 50,
    status: false,
    phone: [123, 456, 789, 012],
    address: {
        city: "Bangalore",
        country: "India"
    },
    work: function() {
        console.log("Teaching");
    }
}