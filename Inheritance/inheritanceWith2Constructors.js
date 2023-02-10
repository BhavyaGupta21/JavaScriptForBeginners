class Employee {

    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(`Name is: ${this.name}`);
    }

    // Here we have only one property: name
}

class HR extends Employee {
    
    constructor(name, numberOfLeaves) { // This will throw error and say that we will have to call the super class constructor and only then we can use this constructor. Hence we will use super(). We will also have to use the parameters that are there in the previous constructors. Surely we can add more as well.
        super(name); // We need to pass the same parameters inside super() as well.
        this.numberOfLeaves = numberOfLeaves;
        console.log("This is child class constructor");
    }

    approveLeave() {
        console.log(`Your leave request for ${this.numberOfLeaves} days have been approved`);        
    }

    // Here we have 2 properties: name and numberOfLeaves
}

let HR1 = new HR("John", 10);
HR1.show();
HR1.approveLeave();