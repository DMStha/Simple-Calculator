document.addEventListener("DOMContentLoaded", function () {
  // Get the screen and buttons
  const screen = document.querySelector(".screen");
  const buttons = document.querySelectorAll(".btn");

  // Attach click event to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // If the button is the "=" button, perform the calculation
      if (button.classList.contains("btn-equal")) {
        try {
          screen.value = eval(screen.value);
        } catch (error) {
          screen.value = "Error";
        }
      } else if (button.classList.contains("btn-clear")) {
        // If the button is the "C" button, clear the screen
        screen.value = "";
      } else {
        // For other buttons, append the respective data-num attribute to the screen
        screen.value += button.getAttribute("data-num");
      }
    });
  });
});
