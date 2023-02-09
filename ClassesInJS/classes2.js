class Employee {

    // In JS, we don't have constructor overriding concept. We can have only one constructor in a class in JS. It does not give error while compilation but throws error at run time.
    // If we don't have a constructor, there is a constructor by default which is a blank constructor.

    constructor(name, tech, location) { // Whatever properties we need to define insode a class will get defined in the constructor first
        this.name = name // "this" keyword refers to the current object. This means that whatever parameter will get passed to the name parameter, it will get stored to a property called "name". This name will belong to "Employee" class only
        this.tech = tech
        this.location = location
    }   

    getEmpDetails() {
        console.log(`Emp details are:\nName is: ${this.name}\nLocation is: ${this.location}\nTechnology is: ${this.tech}\nEmail is: ${this.email}`);
    }

    // To add another property to the class
    setEmpEmail(email) {
        this.email = email;
    }
}

let emp1 = new Employee("John","QA", "Bangalore");
emp1.getEmpDetails();
console.log();

let emp2 = new Employee("Doe", "Developer", "Pune");
emp2.getEmpDetails();
console.log();

let emp3 = new Employee("Rahul", "Developer"); // Since the third value is missing, hence the third value will be undefined
emp3.getEmpDetails();
console.log();

let emp4 = new Employee("Bhavya", "QA", "Bangalore"); // Every time we create an object, constructor will be called automatically
emp4.setEmpEmail("test@test.test");
emp4.getEmpDetails();