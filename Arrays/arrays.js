// It is a collection of values [10, 20, 30, 40]
// Index of array always starts from 0
// Every time we get more than one web element, we will be getting it in an array and so the array that we will be getting will bw the array of web elements. Each element of the array we represent dedicated web element

let arr = [10, 20, 30, 40]
console.log("Value at array position 2 is: " + arr[2]); // To fetch a specific value from the array
console.log(arr[100]); // It will through undefined as this index does not exist
console.log();

// In JS we can have multiple dataTypes inside one array. We can even have another array inside an array
let arr1 = [10, "John", false, 2.5]
console.log("value at position 1 of arr1 is: " + arr1[1]);
console.log();

// Array inside array
let arr2 = [
    10,
    "JS",
    "John",
    ["Java", "JS", "C#"] // This will be at index 3
]

console.log("Value of the array inside another array is: " + arr2[3]);
console.log("To get value at any index of array inside another array: " + arr2[3][1]);
console.log();

// Objects inside array
let arr3 = [
    10,
    "JS",
    {
        fname: "John",
        lname: "Doe",
        profession: "QA",
        phone: 909090,
        status: true
    }
]
console.log("Value of object inside array: " + arr3[2]);
console.log(arr3[2].fname); // To capture any value using key of the object inside arrays
console.log();

// Properties of array
let arr4 = [10, 20, 30, 40, 50];
console.log("Length of the array 4 is: " + arr4.length);
console.log();

// Adding values to the array
arr4.push(200); // Push will add the given value to the last and array will have the new value as 200 at the end
console.log(arr4.push(700)); // When we write the push statement inside the log statement, the element gets added and we are returned with the new length of the array
arr4.unshift(300); // Unshift also adds the value to the array but this will add the given value to the first position of the array
console.log(arr4);
console.log();

// Removing values from array
arr4.pop() // It removes the value from the last of any array
arr4.shift(); // This will remove a value from the beginning of the array or the first element
console.log(arr4);
console.log();

// If we want to add or remove any value from somewhere in the middle of the array, we have a method called splice
// To add a value using splice
arr4.splice(1, 2) // Both these values are of index. So, it will remove 2 values from index 1 till 2
arr4.splice(1, 1); // This will remove the value at index 1 only
console.log(arr4);
console.log();

let arr6 = [100, 200, 300, 400, 500]
arr6.splice(1); // If we give any one value inside the splice method, the array will have only 1 value left that is the first one.
console.log(arr6);
arr6.splice(0); // If we give 0 here inside splice, we will be left with no value inside the array
console.log(arr6);
console.log();

// To add value using splice
arr4.splice(2, 0, 500) // At index 2 "500" will be added. We will make second value as "0" purposely because we are using same splice method for adding as well as removing elements from array
console.log(arr4);
arr4.splice(3, 0, 'John');
console.log(arr4);
console.log();

// Array is also a built-in object in JS with 'n' number of methods inside it

let arr5 = [] // Blank array
console.log(arr5);
console.log(arr5.length);
console.log();

// To update any value in the array
arr4[3] = 900;
console.log(arr4);

let arr7 = [10, "John", true, 89.09]

let o1 = {
    fname: "JS",
    lanme: "Cypress"
}
arr7.push(o1);
console.log(arr7);
console.log();

let o2 = {
    fname: "PW",
    lname: "WDIO"
}

arr7.push(o2);
console.log(arr7);
console.log();

console.log(arr7.indexOf(true));
console.log();

console.log(arr7.indexOf("newyy")); // This does not exists inside the array and so will return "-1"
console.log();

// Convert string to array:
console.log(Array.from("John")); // Gets converted to comma separated elements of the array
console.log();

let arr8 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr8.fill('h')); // Fills the array values with the specified value inside "fill"
console.log();

let arr9 = [2, 4, 5, 6, 7, 8, 9];
console.log(arr9.fill("b", 4)); // "4" will become the starting position for b to get filled till the end of the array
// Start range is incusive and end range is exclusive.
console.log();

let arr10 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr10.fill("b", 3, 6)); // Here 3 becomes the start range and 6 becomes the end range, where 6 will be exclusive
console.log();

const arr11 = [23, 67, 73, 56, 65, 36, 27, 78, 93, 30];
const result = arr11.filter((num) => num != 56);
console.log(result); // Will retrun all the numbers inside arr11 other than the spcified number, here the number is 56

console.log(arr11.slice(1, 4)); // It includes everything that is within the range entered in the slice method. First will remain inclusive and the end range will be exclusive.
console.log();

console.log(arr11.slice(1)); // This will remove the number of values from the beginning as mentioned inside the slice method