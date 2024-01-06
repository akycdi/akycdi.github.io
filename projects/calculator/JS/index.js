document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.querySelector(".text-container");
  const calcSpan = document.querySelector(".calc");
  const buttons = document.querySelectorAll("button");

  let inputText = "";

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === "DEL") {
      inputText = inputText.slice(0, -1);
      resetColor();
    } else if (buttonValue === "RESET") {
      inputText = "";
      resetColor();
    } else if (buttonValue === "=") {
      inputText = eval(inputText);
      changeColorForResult();
    } else if (["+", "-", "/", "x"].includes(buttonValue)) {
      inputText += " " + buttonValue + " ";
      resetColor();
    } else {
      inputText += buttonValue;
      resetColor();
    }

    updateDisplay();
  }

  function updateDisplay() {
    textContainer.textContent = inputText;
  }

  function resetColor() {
    calcSpan.style.color = "white";
  }

  function changeColorForResult() {
    calcSpan.style.color = "#1e1e1e";
  }
});
