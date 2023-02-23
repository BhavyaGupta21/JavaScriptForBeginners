let url = "https://restcountries.com/v2/all"
// We call API using the "fetch" method which will accept the URL and will return the result, the returned response will convert it to JSON and then use it.

import fetch from "node-fetch"

// let fetchData = function() {

//     let response = fetch(url);

//     let country = response.json(); // response.json is not a function. We will have to use async and await

//     console.log(country);
// }

let fetchData = async function() {

    let response = await fetch(url);

    let country = await response.json(); // response.json is not a function. We will have to use async and await
    // We can also handle this by using try and catch

    console.log(country);
}
console.log();

let fetchData1 = function() {

    try {
        let response = fetch(url);

        let country = response.json(); // response.json is not a function. We will have to use async and await

        console.log(country);
    }
    catch (err) {
        console.log("Could not load the API response" + err.message);
    }
}
fetchData();

fetchData1();