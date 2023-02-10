// The name is getter and setter but the keywords are "get" and "set"

class Employee {

    constructor(name, tech, location) {
        this.name = name 
        this.tech = tech
        this.location = location
    }   

    get empDetails() {
        return `Emp details are:\nName is: ${this.name}\nLocation is: ${this.location}\nTechnology is: ${this.tech}\nEmail is: ${this.email}` // This means that whenever this method is called, it will return this value
    }

    set empEmail(email) {
        this.email = email;
    }
}

let emp1 = new Employee("John", "QA", "USA")
console.log(emp1.empDetails); // Since we have not given any email for this employee, so we will get the email as "undefined"
console.log();

let emp2 = new Employee("Doe", "Developer", "Bangalore");
emp2.empEmail = "test@test.test"
console.log(emp2.empDetails); // We don't have to pass the pair of parenthesis here.