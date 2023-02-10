// In order to destructure, we need to have a structure first. We need to have objects, arrays, etc. Basically, we need to have some set of values to extract from the object or from the array.
let emp = {
    name: "John",
    age: 35,
    gender: "Male"
} // We can have any value in it, be it array, objects, nested objects etc.
// This is structuring the object

// If we want to destructure, and want to use the three properties above,
let {name, age, gender} = emp // "name, age, gender" are from object "emp". Here the sequence of the variables also does not matter, unless the key names are similar.

// This refers to destructuring an object
console.log("Name is: " + name);
console.log("Age is: " + age);
console.log("Gender is: " + gender);
console.log();

// If we don't want to destructure, we can still fetch the details by using dot notation. emp.name, emp.age, emp.gender. But if we want to store the values into variable and use it, we can do it by destructuring.

// If we access a variable other than what is inside the object or change the name, we will get undefined
// console.log(name1);
// console.log(technology);

// We can also change the name os the variables, but it is not recommended:
let {name: n, gender: g, age: a} = emp

console.log(`Name is: ${n}`);
console.log(`Age is: ${a}`);
console.log(`Gender is: ${g}`);

// We can destructure an array as well