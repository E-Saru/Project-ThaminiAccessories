//function prompts the user to enter student's mark, calculates and returns corresponding grade.
function calculateGrade() {
    // prompts the user for input
    let marks = parseInt(prompt("Enter the student's marks"))
    //Checks if the input is within the valid range (0 to 100)
    if (0 <= marks && marks <= 100) 
    //Calculates Grades based on specified ranges
    {
        if (marks > 79) {
            return "A";
        } else if (60<= marks && marks <= 79) {
            return "B";
        } else if (50<= marks && marks <= 59) {
            return "C";
        } else if (40< marks && marks <= 49) {
            return "D";
        } else {
            return "E";
        }
    } else {
        console.log("Marks should be between 0 and 100")
       }
}
calculateGrade();