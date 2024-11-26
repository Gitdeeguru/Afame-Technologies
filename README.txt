Project Documentation

Project Title: Basic Calculator Web App

Project Overview:
This is a basic calculator built using HTML, CSS, and JavaScript. The project includes a responsive user interface with buttons for performing basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator also includes features like input display and error handling for invalid operations such as division by zero.

Technologies Used:
- HTML: To structure the web page and define the user interface elements.
- CSS: To style the layout and make the web page look visually appealing. Used CSS Grid for button layout and responsive design.
- JavaScript: To implement the logic behind the calculator operations and handle user input dynamically.

Features:
- Responsive Design: The calculator adjusts to different screen sizes, making it usable on both desktop and mobile devices.
- Basic Arithmetic Operations: Includes addition (+), subtraction (-), multiplication (*), and division (/).
- Input Display: Shows the user’s current input, operation, and the result.
- Clear Button (C): Clears the current input and allows starting a new calculation.
- Error Handling: Displays an "Error" message when dividing by zero.

Project Structure:

/Afame-Technologies
    ├── index.html         # Main HTML file containing the structure of the calculator.
    ├── style.css          # CSS file for styling the layout and design.
    ├── script.js          # JavaScript file that contains the logic of the calculator.
    ├── README.txt         # This documentation file.

How to Run the Project:
1. Clone or Download the repository:
   - If you're using GitHub, clone the repository using the following command:
     git clone https://github.com/your-username/Afame-Technologies.git
   - Alternatively, you can download the project files directly from Google Drive or GitHub as a ZIP file.

2. Open the Project Locally:
   - Navigate to the folder where you have the project files.
   - Open the index.html file in any modern web browser (Google Chrome, Firefox, etc.).

3. Usage:
   - Click the buttons (0-9) to input numbers.
   - Click one of the operator buttons (+, -, *, /) to perform the desired operation.
   - Click the C button to clear the input.
   - Press the = button to calculate and display the result.

Features Implementation:
- Button Layout:
  - The calculator buttons are aligned using CSS Grid for a clean, structured layout.
  - Each button has an event listener that either appends a value to the display or performs a calculation.

- Error Handling:
  - If the user attempts to divide by zero, the calculator displays an "Error" message.

- Responsive Design:
  - The layout adjusts to different screen sizes, providing a smooth user experience on both mobile and desktop devices.

Challenges Faced:
- Handling Division by Zero: Implementing the error message when the user tries to divide by zero was a bit tricky, but it was solved by checking the denominator before performing the division.
- Ensuring Responsiveness: Making the calculator look good on both desktop and mobile required careful use of CSS Grid and media queries.

Future Improvements:
- Decimal Points: Add the functionality to handle decimal points in the calculations.
- Keyboard Input: Allow users to perform calculations using the keyboard in addition to the buttons.
- Advanced Functions: Implement functions for square root, powers, and other advanced operations.

Contact:
- Internship Support: internship@afame.in
- Project Repository: https://github.com/your-username/Afame-Technologies