// In OOP (Object Oriented Programming), we have to consider everything as an object

// Constructor: In order to create any object, we have to use constructor. Constructor as the name says, it will construct the values at the time of object creation, whatever values we want to define, that will be done by the constructor.

// Whenever we use a functions without any class, they are called functions, but when we see a function within a class, we call them as methods.

class Person {
    show() { // Since we call functions as methods when inside a class, no need to write function keyword before the method
        console.log("I am inside 'show' method which is inside 'Person' class");
    }
    
    talk() {
        console.log("This is talk method inside 'Person' class");
    }

    walk() {
        console.log("This is walk method inside 'Person' class");
    }

    teach() {
        console.log("This is teach method inside 'Person' class");
    }
}
let object1 = new Person(); // In order to create a new object of the class, we have to use the keyword "new". No matter how many objects we need to create, we will have to use the "new" keyword every time
let object2 = new Person();
let objects3 = new Person(); // Once we define the properties or anyh functions inside the class, we will be able to access the properties using these objects

console.log(typeof(Person));
console.log(object1);
object1.show();
object2.talk();
objects3.walk();
object1.teach();