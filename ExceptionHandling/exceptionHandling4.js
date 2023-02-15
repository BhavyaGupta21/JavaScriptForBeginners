function checkMarks(marks) {

    if(marks < 0) { 

        throw "Number should be greater than 0."
    }

    return marks;
}

console.log(checkMarks(-79));
