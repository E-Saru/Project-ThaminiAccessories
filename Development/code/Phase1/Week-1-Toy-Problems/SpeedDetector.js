const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question("Input speed of your car: ", function(answer) {
    // Parse the user input as a floating-point number
    const speed = parseFloat(answer);

    // Give the driver one demerit point for every 5 km/s above the speed limit (70).
    // Print the total number of demerit points.
    let points = Math.floor((speed - 70) / 5);

    // Define the function speedDetector.
    // If car speed is less than 70, print out 'Ok'.
    // If car speed is above the speed limit, calculate and print out points for the user.
    // If customer points exceed 12, prompt out, 'License suspended'.
    function speedDetector() {
        if (speed < 70) {
            console.log('Ok');
        } else if (points > 12) {
            console.log('License suspended');
        } else {
            console.log(`Points: ${points}`);
        }

        // Close the readline interface
        rl.close();
    }

    // Call the function speedDetector.
    speedDetector();
});
