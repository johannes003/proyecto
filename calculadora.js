function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function setOperator(operator) {
    document.getElementById('display').value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch(error) {
        document.getElementById('display').value = 'Error';
    }
}
