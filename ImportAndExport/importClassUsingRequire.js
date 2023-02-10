let Employee = require("./exportClassUsingRequire");

let emp1 = new Employee("John", "QA", "USA");
emp1.empEmail = "test@test.test";
emp1.empDetails;

// To run this file, we need to remove the "module" in "package.json" file.