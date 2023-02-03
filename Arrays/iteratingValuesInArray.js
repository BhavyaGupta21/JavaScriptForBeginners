let arr = [10, 20, 30, 40]
for (let i = 0; i < arr.length; i++) {
    console.log("Value of i is: " + arr[i]);
}


let a1 = [1, 2, 3, 4]
let a2 = a1;
console.log(a1);
console.log(a2);
a1.push(10);
console.log(a1);
console.log(a2); // a2 will also get updated here since both references have same values