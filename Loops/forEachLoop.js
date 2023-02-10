let arr = [10, 20, 30, 40];

arr.forEach(function(x, index, arr) { // forEach loop accepts 3 parameters, but we can use any one of them. The first paramter contains the values of the array, second parameter contains the indexes of the array and the third parameter contains the array itself.

    console.log(x);

})
console.log();

arr.forEach(function(x, index, arr) { 

    console.log(index);

})
console.log();


arr.forEach(function(x, index, arr) { 

    console.log(arr);

})