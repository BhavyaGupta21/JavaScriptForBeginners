class Employee {
    constructor(name, tech, location) { 
        this.name = name
        this.tech = tech
        this.location = location
    }   

    get empDetails() {
        console.log(`Emp details are:\nName is: ${this.name}\nLocation is: ${this.location}\nTechnology is: ${this.tech}\nEmail is: ${this.email}`);
    }

    set empEmail(email) {
        this.email = email;
    }
}

let emp1 = new Employee("John", "QA", "USA");
emp1.empEmail = "test@test.test"
let emp2 = new Employee("Doe", "Developer", "Australia");

export {emp1, emp2};