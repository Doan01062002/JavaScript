document.addEventListener('DOMContentLoaded', function() {
    let screen = document.getElementById("screen");
    let buttons = document.querySelectorAll('.button');
    let clearButton = document.getElementById('clear');
    let equalButton = document.querySelector('.equal');

    let currentNumber = "";
    let currentOperation = null;
    let result = null;

    function appendNumber(number) {
        currentNumber += number;
        screen.innerText = currentNumber;
    }

    function performOperation(operation) {
        if (currentOperation !== null) {
            calculate();
        }
        currentOperation = operation;
        result = parseFloat(currentNumber);
        currentNumber = "";
    }

    function calculate() {
        let number = parseFloat(currentNumber);
        switch (currentOperation) {
            case "+":
                result += number;
                break;
            case "-":
                result -= number;
                break;
            case "*":
                result *= number;
                break;
            case "/":
                result /= number;
                break;
        }
        currentNumber = result.toString();
        screen.innerText = currentNumber;
        currentOperation = null;
    }

    function clearScreen() {
        currentNumber = "";
        currentOperation = null;
        result = null;
        screen.innerText = "";
    }

    function handleButtonClick(event) {
        const button = event.target;
        const buttonText = button.innerText;
        if (button.classList.contains('number')) {
            appendNumber(buttonText);
        } else if (button.classList.contains('operation')) {
            performOperation(buttonText);
        } else if (button === clearButton) {
            clearScreen();
        } else if (button === equalButton) {
            calculate();
        }
    }

    buttons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
    });
});