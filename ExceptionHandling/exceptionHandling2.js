let num = 5;
let result = 5 + 1;
console.log(result);

try {

    let result2 = John + 1 // This will give us a "ReferenceError" since we do not know what is John

} catch (error) {
    console.log("Please check, there is a " + error.name + ": " + error.message);
}
