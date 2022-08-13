//inputs
let inputWeight = document.getElementById('kg');
let inputHeight = document.getElementById('height');
//buttons
let calculateBtn = document.getElementById('calculate-btn');
let resetBtn = document.getElementById('reset-btn');
//result div
let result = document.getElementById('result');
//toast message
let toastMessage = document.getElementById('toast-message');



function calculateFunc() {
    let height, weight, bmi;
    weight = inputWeight.value 
    height = inputHeight.value

    bmi = weight / (height * 0.0254 * height * 0.0254)
    result.textContent = bmi.toFixed(2);

    let messages = message(bmi)
    toastMessage.textContent = messages
} 
function resetFunc() {
    inputWeight.value = ''
    inputHeight.value = ''
    result.textContent = ''
}

function message(bme) {
    if (bme <= 16) {
        return 'You are severe Thin'
    } else if (bme > 16 && bme < 18.5) {
        return 'You are Halka Thin'
    } else if (bme > 18.5 && bme <= 25) {
        return 'You are Normal'
    } else if (bme > 25) {
        return 'You are Fat'
    }
}

function isValid() {
    if (Number(inputWeight.value) && Number(inputHeight.value)) {
        calculateFunc()
    } else {
        alert('Type Valid Height & Weight')
        resetFunc()
    }
}

calculateBtn.addEventListener('click', isValid)
resetBtn.addEventListener('click', resetFunc)