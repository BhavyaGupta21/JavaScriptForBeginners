for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue; // This means that continue will just skip the current iteration but break will terminate the loop.
    }
    console.log("Value of i is: " + i);
}