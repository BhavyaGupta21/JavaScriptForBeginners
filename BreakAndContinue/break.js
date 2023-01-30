for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        break; // This means that whenever the value of i is 5, the loop will get terminated. Opposite of break is continue. Continue will just skip the current iteration.
    }
    console.log("Value of i is: " + i);
}
console.log();

for (let i = 0; i <= 10; i = i + 1) {
    if (i == 3) {
        console.log("Value matched");
        break;
    }
    console.log("Value of i is: " + i);
}