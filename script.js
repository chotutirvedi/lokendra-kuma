function checkEvenOdd() {
    const input = document.getElementById("numberInput").value; // Get the user input
    const result = document.getElementById("result");          // Reference to the result <p> tag
  
    if (input === "") {
      result.textContent = "Please enter a number!";
      result.style.color = "red";
      return;
    }
  
    const number = parseInt(input);
    if (number % 2 === 0) {
      result.textContent = `${number} is an even number.`;
      result.style.color = "green";
    } else {
      result.textContent = `${number} is an odd number.`;
      result.style.color = "blue";
    }
  }
  