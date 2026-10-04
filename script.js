const display = document.getElementById('display');
const history = document.getElementById('history');
const buttons = document.querySelectorAll('.btn');

let currentExpression = '';
let shouldResetDisplay = false;

function updateDisplay(value) {
  display.textContent = value || '0';
}

function updateHistory(value) {
  history.textContent = value || '0';
}

function appendValue(value) {
  if (shouldResetDisplay) {
    currentExpression = '';
    shouldResetDisplay = false;
  }

  if (value === '.' && /\d*\.\d*$/.test(currentExpression) === false && /\d*$/.test(currentExpression) === '') {
    currentExpression += '0.';
  } else if (value === '.' && currentExpression.includes('.')) {
    const lastNumber = currentExpression.split(/[-+*/%]/).at(-1);
    if (lastNumber.includes('.')) {
      return;
    }
  }

  if (value === '.' && currentExpression === '') {
    currentExpression = '0.';
  } else if (value !== '.') {
    currentExpression += value;
  } else {
    currentExpression += value;
  }

  updateDisplay(currentExpression);
  updateHistory(currentExpression);
}

function isOperator(value) {
  return ['+', '-', '*', '/', '%'].includes(value);
}

function handleOperator(operator) {
  if (currentExpression === '') {
    return;
  }

  const lastChar = currentExpression.slice(-1);

  if (isOperator(lastChar)) {
    currentExpression = currentExpression.slice(0, -1) + operator;
  } else {
    currentExpression += operator;
  }

  updateDisplay(currentExpression);
  updateHistory(currentExpression);
}

function clearAll() {
  currentExpression = '';
  updateDisplay('0');
  updateHistory('0');
  shouldResetDisplay = false;
}

function deleteLast() {
  if (currentExpression === '') return;

  currentExpression = currentExpression.slice(0, -1);
  updateDisplay(currentExpression || '0');
  updateHistory(currentExpression || '0');
}

function calculatePercent() {
  if (!currentExpression) return;

  try {
    const result = Function(`"use strict"; return (${currentExpression.replace(/%/g, '/100')})`)();
    const formatted = Number.isInteger(result) ? result.toString() : Number(result.toFixed(10)).toString();
    currentExpression = formatted;
    updateDisplay(formatted);
    updateHistory(formatted);
    shouldResetDisplay = true;
  } catch {
    updateDisplay('Error');
    updateHistory('Error');
    currentExpression = '';
  }
}

function evaluateExpression() {
  if (!currentExpression) return;

  try {
    const sanitized = currentExpression.replace(/×/g, '*').replace(/÷/g, '/');
    const result = Function(`"use strict"; return (${sanitized})`)();

    if (!Number.isFinite(result)) {
      throw new Error('Invalid calculation');
    }

    const formattedResult = Number.isInteger(result) ? result.toString() : Number(result.toFixed(10)).toString();
    updateHistory(`${currentExpression} =`);
    currentExpression = formattedResult;
    updateDisplay(formattedResult);
    shouldResetDisplay = true;
  } catch {
    updateDisplay('Error');
    updateHistory('Error');
    currentExpression = '';
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === 'clear') {
      clearAll();
      return;
    }

    if (action === 'delete') {
      deleteLast();
      return;
    }

    if (action === 'percent') {
      calculatePercent();
      return;
    }

    if (action === 'equals') {
      evaluateExpression();
      return;
    }

    if (value && ['+', '-', '*', '/', '%'].includes(value)) {
      handleOperator(value);
      return;
    }

    if (value !== undefined) {
      appendValue(value);
    }
  });
});

window.addEventListener('keydown', (event) => {
  const key = event.key;

  if (/^[0-9]$/.test(key)) {
    appendValue(key);
  } else if (['+', '-', '*', '/', '%'].includes(key)) {
    handleOperator(key);
  } else if (key === '.') {
    appendValue('.');
  } else if (key === 'Enter' || key === '=') {
    evaluateExpression();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearAll();
  }
});

updateDisplay('0');
updateHistory('0');
