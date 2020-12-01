const calculator = {
    displayValue: '0',
    firstOper: null,
    secondOper: false,
    operator: null,
  };

  function inputDig(digit) {
    const { displayValue, secondOper } = calculator;
  
    if (secondOper === true) {
      calculator.displayValue = digit;
      calculator.secondOper = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function handleOper(nextOper) {
    const { firstOper, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
    
    if (operator && calculator.secondOper)  {
      calculator.operator = nextOper;
      return;
    }

    if (firstOper == null && !isNaN(inputValue)) {
        calculator.firstOper = inputValue;
      } else if (operator) {
        const result = calculate(firstOper, inputValue, operator);
    
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOper = result;
      }
    
      calculator.secondOper = true;
      calculator.operator = nextOper;
    }

    function calculate(firstOper, secondOper, operator) {
        if (operator === '+') {
          return firstOper + secondOper;
        } else if (operator === '-') {
          return firstOper - secondOper;
        } else if (operator === '*') {
          return firstOper * secondOper;
        } else if (operator === '/') {
          return firstOper / secondOper;
        }
      
        return secondOper;
      }

      function resetCalculator() {
        calculator.displayValue = '0';
        calculator.firstOper = null;
        calculator.secondOper = false;
        calculator.operator = null;
      }
      
      function updateDisplay() {
        const display = document.querySelector('.calculator-screen');
        display.value = calculator.displayValue;
      }
      
      updateDisplay();
      
      const keys = document.querySelector('.calculator-keys');
      keys.addEventListener('click', event => {
        const { target } = event;
        const { value } = target;
        if (!target.matches('button')) {
          return;
        }
      
        switch (value) {
          case '+':
          case '-':
          case '*':
          case '/':
          case '=':
            handleOper(value);
            break;
          case '.':
            inputDecimal(value);
            break;
          case 'all-clear':
            resetCalculator();
            break;
          default:
            if (Number.isInteger(parseFloat(value))) {
              inputDig(value);
            }
        }
      
        updateDisplay();
      });