class Employee {

    getEmpDetails(name) {
        console.log(`Name is: ${name}`);
    }

    getEmpDetails(name, age) {
        console.log(`Name is: ${name} and age is: ${age}`);
    }

    getEmpDetails(name, age, location) {
        console.log(`Name is: ${name}, age is: ${age} and location is: ${location}`);
    }
}

let emp1 = new Employee();
emp1.getEmpDetails("John");

// In JS, we do not have the concept of method overloading. The latest method will get picked.