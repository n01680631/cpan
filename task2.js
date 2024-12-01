<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Click Example</title>
    <style>
        /* Button styling */
        #myButton {
            padding: 15px 30px;
            font-size: 18px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
        }

        #myButton:hover {
            transform: scale(1.05); /* Slight scaling effect on hover */
        }
    </style>
</head>
<body>
    <!-- Button element -->
    <button id="myButton">Click Me!</button>

    <script>
        // Function to generate a random color
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Get the button element by ID
        const button = document.getElementById('myButton');

        // Event listener for button click
        button.addEventListener('click', function() {
            // Display an alert
            alert('Button clicked!');
            
            // Change the button's background color to a random color
            button.style.backgroundColor = getRandomColor();
        });
    </script>
</body>
</html>
