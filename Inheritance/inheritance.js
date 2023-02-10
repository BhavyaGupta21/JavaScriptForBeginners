// In inheritance, we are able to reuse the code just like in import and export where we reuse the codes but we have to use "import" and "export" keywords explicitly. We can use this using inheritance through smart way.

// Suppose, we have a class and it has some properties inside it and we want to access these properties. Through inheritance, we can use these properties and the methods directly without creating additional object or without using import and export just by using a keyword called "extends".

// By using "extemds" keyword, we will be able to access all the properties and methods inside another class just by saying "class B extends class A". Here, "class A" will become the parent class and all the properties of this parent class will be accessible to the child "class B"

// We can interchange the words "super class", "base class", "parent class"

// We can interchange the words "Child class", "derived class", "Sub class"

// Types of inheritance:
// 1. Single level Inheritance: Where one class is inheriting another class. When we have 2 classes say A and B. Class A extends class B. class A has all the properties of class B and class A can have its own properties.
// 2. Multi level Inheritance: Where we have 'n' number of classes. Say we have 3 classes - class A, class B and class C. class C extends class B and class B extends class A. Class C will have all the properties and methods of class A and B. Class B will have all the methods and properties of class A.
// 3. Multiple Inheritance: This is not supported in Java and JS where one class is extending 2 classes.
// 4. Hybrid Inheritance: Since it does not supports Multiple inheritance, JS does not supports Hybrid. Suppose we have 6 classes - class A, B, C, D, E and F. Class C extends class A and B. Class D extends class C and class E and class F extends class D.

class Employee {

    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(`Name is: ${this.name}`);
    }
}

class HR extends Employee {
    
    // If we do not create a constructor here, we will automatically get a constructor from the parent class

    approveLeave() {
        console.log("Your leave request has been approved");
        
        // We can also pass values to constructor from this method as well
        
    }
}

let HR1 = new HR("John");
HR1.show();
HR1.approveLeave();