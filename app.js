let weightInput = document.getElementById('kg');
let heightInput = document.getElementById('height');

let calculateBtn = document.getElementById('calculate-btn');
let resetBtn = document.getElementById('reset-btn');

let bmiResult = document.getElementById('result');
let toastMessage = document.getElementById('toast-message');







function calculateBtnFunc() {
    let weight = Number(weightInput.value);
    let height = Number(heightInput.value);
    let bmi = weight / (height * 0.0254 * height * 0.0254);

    bmiResult.innerHTML = bmi.toFixed(2)

    let returnMessage = message(bmi)
    toastMessage.textContent = returnMessage;
}
    


function message(bmiValue) {
    if (bmiValue < 16) {
        return "You are severe Thin"
    } else if (bmiValue >= 16 && bmiValue <= 17) {
        return "You are Moderate Thin"
    } else if (bmiValue > 17 && bmiValue <= 18.5) {
        return "You are mid thin"
    } else if (bmiValue > 18.5 && bmiValue <= 25) {
        return "You are normal"
    } else if (bmiValue > 25) {
        return " You are Overweight"
    }
}

   

function resetFunc(){
    weightInput.value = '';
    heightInput.value = '';
    bmiResult.innerHTML = '';
    toastMessage.textContent = '';
}

function eventHandler(){
    if (Number(heightInput.value) && Number(weightInput.value)) {
        calculateBtnFunc()
        
    } else {
        alert('Please type valid inputs')
        resetFunc()
    }
}

calculateBtn.addEventListener('click', eventHandler)
resetBtn.addEventListener('click', resetFunc)