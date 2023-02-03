let arr = [1, 2, 3, 4]

arr.forEach(function(num1) { // The inside function will rum 4 times as we have 4 values inside the array. First the forEach function will get executed and then the inside function will get executed
    console.log(num1);
});
console.log();

// Debug mode is to see how the flow of our program works
// Step into means that if we have 'n' number of functions inside function and we want to go through each function, so we use the step into 
// Step over means one by one keep executing

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if(arr[i] == 3) {
        console.log("Hello World!");
    }
    else {
        console.log("Hello JS");
    }

}