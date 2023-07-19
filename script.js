// Get the display input element
const displayInput = document.querySelector('input[name="display"]');

// Add event listeners to all buttons
const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Function to handle button clicks
function handleButtonClick(event) {
  const buttonValue = event.target.value;
  console.log(buttonValue);
  // Perform different actions based on button value
  switch (buttonValue) {
    case 'AC':
      displayInput.value = '';
      displayInput.placeholder = '0'; // Corrected placeholder assignment
      break;
    case 'CE':
      // Clear the last character
      displayInput.value = displayInput.value.slice(0, -1);
      break;
    case '=':
      try {
        // Evaluate the expression
        displayInput.value = eval(displayInput.value);
      } catch (error) {
        displayInput.value = 'Error';
      }
      break;
    default:
      // Append the button value to the display
      displayInput.value += buttonValue;
      break;
  }
}
