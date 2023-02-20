// In weakSet and weakMap, we can only work with objects. But inside objects we can have any kind of values

let ws1 = new WeakSet();
console.log(ws1); // Blank WeakSet


let ws2 = new WeakSet();
// ws2.add(10); // It won't allow to add 10 to the Weak Set as we can just add objects in a Weak Set and hence it will show error

let o1 = {
    fname: "JS",
    lname: "Cypress"
}

ws2.add(o1);
console.log(ws2); // This won't show the values inside the Weak Set
// In a Weak Set, we just have 3 methods that is add, delete and has. We don't have direct method to get the value inside the Weak Set

let o2 = {
    phone: [10, 20, 30, 40],
    num: 50
}

ws2.add(o2);