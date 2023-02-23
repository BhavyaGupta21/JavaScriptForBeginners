// Falsy values:
// undefined
// null
// 0
// ''
// NaN

// Anything other than these values are considered truthy values
let user = null;

if(user) {
    console.log("Condition is true"); // Falsy values are treated as false
}