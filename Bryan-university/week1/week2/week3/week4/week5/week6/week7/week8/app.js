var addResultButton = document.getElementById('add__result__btn');
var addNumberOne = document.getElementById('add__number__one');
var addNumberTwo = document.getElementById('add__number__two');
var addSection = document.getElementById('addSection');
​
var subtractResultButton = document.getElementById('subtract__result__btn');
var subtractNumberOne = document.getElementById('subtract__number__one');
var subtractNumberTwo = document.getElementById('subtract__number__two');
var subtractSection = document.getElementById('subtractSection');
​
var multiplyResultButton = document.getElementById('multiply__result__btn');
var multiplyNumberOne = document.getElementById('multiply__number__one');
var multiplyNumberTwo = document.getElementById('multiply__number__two');
var multiplySection = document.getElementById('multiplySection');
​
const confirmInputs = () => {
    
}
​
var clearInputs = () => {
    const getInputs = document.querySelectorAll('input');
    for (const val of getInputs) {
        val.value = "";
    }
}
​
function result(num1, operation, num2) {
    if (operation === '+') {
        return parseInt(num1) + parseInt(num2);
    } else if (operation === '-') {
        return parseInt(num1) - parseInt(num2);
    } else if (operation === '*') {
        return parseInt(num1) * parseInt(num2);
    }
    
}
​
function add() {
    let addInjectedResult = addSection;
    addInjectedResult.className = 'number__section injectedResultClass';
    addSection.append(`${result(addNumberOne.value, '+', addNumberTwo.value)}`); 
    clearInputs();
}
​
function sub() { // fix the subtract section issue ...
    let subtractInjectedResult = subtractSection;
    subtractInjectedResult.className = 'number__section injectedResultClass';
    subtractSection.append(`${result(subtractNumberOne.value, '-', subtractNumberTwo.value)}`); 
    clearInputs();
}
​
function mult() {
    let multiplySectionInjectedResult = multiplySection;
    multiplySectionInjectedResult.className = 'number__section injectedResultClass';
    multiplySection.append(`${result(multiplyNumberOne.value, '*', multiplyNumberTwo.value)}`); 
    clearInputs();
}
​
​
addResultButton.addEventListener('click', add);
subtractResultButton.addEventListener('click', subt);
multiplyResultButton.addEventListener('click', mult);
