function checkMarks(marks) {

    if(marks < 0) { 

        throw new RangeError("Number should be greater than 0.")
    }

    return marks;
}

try {
    
    console.log(checkMarks(-90));

} catch (error) {
    console.log("Please enter a number greater than 0.");
}
