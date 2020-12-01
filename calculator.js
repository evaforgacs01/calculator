"use strict";

const calculator = {
  display: '0',
  firstOper: null,
  secondOper: false,
  operation: null,
  haveDot: false, 
  result: null
  
}

const display = document.querySelector('.calculator-screen');
const numbers = document.querySelectorAll('.keys');
const operation = document.querySelectorAll('.operator');
const equal = document.querySelectorAll('.equal-sign');
const clearAll = document.querySelectorAll('.all-clear');


numbers.forEach(number => {
  number.addEventListener('click', (event) => {
    if( event.target.innerText === '.' && !haveDot){
      haveDot =true;
    }else if(event.target.innerText === '.' && haveDot){
      return;
    }
    // display += e.target.innerText;
  })
})

operation.forEach(operation => {
  operation.addEventListener('click', (e) =>{
    if (!display) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if(display) {
      mathOperation();
    }else{
      result = parseFloat(display);
    }
  clearVar(operationName);
  secondOper = operationName
    console.log(result);
  })
})

function clearVar(name ='') {
  display.innerText = result;
  
}

function mathOperation(){
  if( secondOper === 'X') {
    result = parseFloat(result) * parseFloat(display);
  } else if (secondOper === '+' ) {
    result = parseFloat(result) + parseFloat(display);
  }else if (secondOper === '-' ) {
    result = parseFloat(result) - parseFloat(display);
}else if (secondOper === '/' ) {
  result = parseFloat(result) / parseFloat(display);
}
}

equal.addEventListener('click', (e) =>{ 
  if(!display) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display.innerText = result;
  
})

clearAll.addEventListener('click', (e) => {
  display = '0';
  result = '';
})

window.addEventListener('keydown', (e) => {
  if (
    e.key === '0' ||
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.' 

  ){
    clickButton(e.key);
  }
  
});

function clickedButton(key) {
  numbers.forEach(button => {
    if(button.innerText === key) {
      button.click();
    }
  })
}

function clickOper(key) {
  operation.forEach(button => {
    if (button.innerText === key) {
      button.click();
    }
  })
}




