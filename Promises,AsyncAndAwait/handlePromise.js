// Synchronyzation: A simple example is as follows
// We wnt to a restaurant, we got a table and we got a waiter as well. When we give the order, this order will be given to the chef and the chef will be preparing the food.
// The waiter keeps on waiting until the food is ready and then comes back to us and serves the food. We take some time to eat the food and till then the waiter waits for us to complete the food. He will then give us the bill and we will pay and then we will get the receipt and so on.
// This is the synchronization, that is, running in sequence, nothing is happening in parallel.
// By default, JS is synchronous, single threaded languiage that will run our commands in sequence

// Asynchronization: It can run things in parallel
// Same example, we went to a restaurant, waiter is coming, it takes orders from us, goes to the chef and the chef starts making the food. Waiter is free and so he won't wait for the food to be prepared but rather he will go to the other tables and will take orders from them and parallelly, he will go to the chef and once the food is ready, he will deliver the food to the first table and in the mean while, he will go and serve the other tables and then deliver the food prepared to the respective tables and also collect orders side by side and run in a parallel way.
// Here things can happen in a parallel way.

// In automation, there are times where we have to actually wait for any particular element to show up or the action to get completed first and then move to the next step basically wait until the previous step is successfully ran, be it rejected or successful.
// If we have to achieve this kind of thing in JS, we have async, await and promises which can do this task for us where we can give some instructions like we have to wait until this last step is not completed and then move to the next.

// Cypress, Playwright and WDIO handles these sync issues in a different way
// Cypress totally works on Promises
// Playwright uses async and await
// Async and await is the better way of handling async issues than Promises. Async and await is the more elegant way of handling sync issues.

// We have 3 commands in Promises:
// Fulfilled
// Reject
// Pending
// The next step will work on ly if the previous setp returns "fulfilled", it won't move to the next step is "reject" is returned

// new Promise() // It will take 2 functions: resolve and reject
let f1 = function() {
    console.log("I am in f1");
}

let f2 = function() {
    
    setTimeout(function () {
        console.log("I am in f2");
    }, 5000) // This will show up after 5 sec
}

let f3 = function() {
    console.log("I am in f3");
}

f1();
f2();
f3();
// Here JS thinks that I ran f2 function successfully, but it is rather running and it runs f3.

// Now, we have to wait for f3 to run until f2 gets successfully run