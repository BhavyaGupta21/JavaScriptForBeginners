// Objects and arrays are different

// Syntax
// let person {
//     key: value,
//     key1: value1
// }

let person3 = { // Blank object

}
console.log(person3);
console.log(typeof(person3));
console.log();

let person = {
    fname: "John", // Property 1
    empID: 111,
    loc: "Bangalore",
    phone: 90909090,
    status: false
}

console.log("Status of the person is: " + person.status); // these are called "dot notations" obj.key
console.log("Name of the person is: " + person["fname"]); // Bracket notation
console.log("Emp ID of the person is: " + person.empID);
console.log();

// Nested Object
let person1 = {
    name: "Manoj",
    address: { // This another object will be another value
        area: "Whitefield",
        city: "Bangalore", // These values are the actual Datatypes
        street: "KR",
        pincode: 471001
    }
}
console.log(person1.address);
console.log("Pincode of the person 1 is: " + person1.address.pincode);
console.log("City of the person 1 is: " + person1["address"]["city"]);
console.log("Type of City is: " + typeof(person1.address.city));
console.log("Type of pincode is: " + typeof(person1["address"]["pincode"]));
console.log("Street of the person 1 is: " + person1.address.street);
console.log();

let person2 = {
    name: "John",
    plot:  [ // Array in JS
        "p1",
        "p2",
        "p3"
    ]
}
console.log("Plot 2 of the person 2 is: " + person2.plot[1]);
// This complete object or the JSON (JavaScript Object Notation) will be key value pair
console.log();

console.table(person2); // This gives the tabular form of the data (indexes and the values)
console.log();

let user = {
    firstName: "JavaScript",
    lastName: "Cypress",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName); // Here "this" refers to the "user" object
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    }
}

let courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user.getCourseCount());
user.buyCourse("Angular course");
console.log(user.getCourseCount());