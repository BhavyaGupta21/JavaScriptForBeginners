for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue; // This means that continue will just skip the current iteration but break will terminate the loop.
    }
    console.log("Value of i is: " + i);
}


let myStates = ["Himachal Pradesh", "Punjab", "Gujrat", 1947, "Haryana", "Rajasthan"];

for(let i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] !== 'string') continue; // This will skip any other dataType other than string and print only the string
    console.log(myStates[i]);
}