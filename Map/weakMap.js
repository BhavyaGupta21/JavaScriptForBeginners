let wm1 = new WeakMap();
console.log(wm1); // Blank weak map

let wm2 = new WeakMap();
// wm2.set("name", "JS"); // This will throw TypeError as the key has to be an object only
console.log(wm2);

let o1 = {
    fname: "JS",
    lname: "Cypress"
}

let o2 = {
    phone: [12345, 67890, 12345, 67890],
    num: 50
}

wm2.set(o1, "Python");
wm2.set(o2, "Java");

console.log(wm2.get(o1));

// Note that WeakMap is a special type of map in JavaScript where the keys must be objects and the references to these keys are weakly held. This means that if the key object is no longer referenced in the program, it can be garbage collected, and the corresponding key-value pair will be removed from the WeakMap. This makes WeakMap useful for cases where you want to associate additional data with an object without affecting the garbage collection of the object itself.