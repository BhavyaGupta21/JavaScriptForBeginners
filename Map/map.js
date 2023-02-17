// Map object holds key-value pair

// The main difference between a map and an object is that in object, we cannot have another object as a key, but in map it is allowed. In map, both value and key can be object.

let m1 = new Map();
console.log(m1); // This is an empty map
console.log();

let m2 = new Map();
m2.set("fname", "JavaScript");
m2.set("lname","Cypress");
console.log(m2);
console.log();

// We can create nested object as well. Either we can create an object and then use it or we can create an object inline.
m2.set("address",{
    state: "Bangalore",
    pincode: 173212
});
m2.set("marks", [10, 20, 30, 40, 50]);
console.log(m2);
console.log();

console.log(m2.size); // This will return the size of the map
console.log();

console.log(m2.get("address")); // To get a specific value from the map, "get" is used with the key inside.
console.log();

m2.delete("fname");
console.log(m2);
console.log();

console.log(m2.delete("name")); // Since "name" is not matching any key in the map, it will give "false" as the value
console.log();

console.log(m2.get("lname")); // Anything in JS that is not defined will show "undefined"
console.log();

console.log(m2.has("lname")); // Here we will pass key and it will return boolean 
console.log();

m2.clear(); // this will clear everything in the map
console.log(m2);


let m3 = new Map();
m3.set("FirstValue", 10);
m3.set("SecondValue", 20);
m3.set("ThirdValue", 50);
m3.set("Language", "JavaScript");
m3.set("Framework", "Cypress");
m3.set("phone", [1234, 5678, 9012, 3456]);
m3.set("details", {
    fname: "JavaScript",
    lname: "Cypress",
    location: "Bangalore",
    pincode: 498657
})
m3.forEach(function(x, y) { // We will have to pass 2 parmeters to this function as we have 2 things in map that is the key and the value
    // The first parameter will be value here and the second will store the keys
    console.log(x); // This will print the values of the key
    console.log(y); // this will have the keys inside the map
});
console.log();

for(let [x, y] of m3) {
    console.log(x); // This will be printing all the keys inside the map
}
console.log();

console.log(m3.keys()); // This is the map iterator and will return all the keys inside the map
console.log();
console.log(m3.values()); // This will return all the values of the key