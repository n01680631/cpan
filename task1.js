function calculateArea(width, height) {
    function isValidNumber(value) {
        return typeof value === 'number' && value > 0;
    }

    if (!isValidNumber(width)) {
        console.log("Invalid width. Please provide a positive number.");
        return;
    }
    if (!isValidNumber(height)) {
        console.log("Invalid height. Please provide a positive number.");
        return;
    }

    // Calculate the area if both values are valid
    let area = width * height;
    console.log("The area of the rectangle is: " + area);
}

