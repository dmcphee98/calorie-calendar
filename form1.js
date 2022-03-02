// Selectors
const title = document.querySelector('h1');
const genderCheckbox = document.getElementById('gender-toggle');
const genderLabel = document.querySelector('.gender-label');
const unitsCheckbox = document.getElementById('units-toggle');
const unitsLabel = document.querySelector('.units-label');
const ageInput = document.getElementById('age-input');
const heightInputMetric = document.getElementById('height-input');
const heightInputFt = document.getElementById('height-input-ft');
const heightInputIn = document.getElementById('height-input-in');
const heightInputDivMetric = document.getElementById('height-metric');
const heightInputDivFt = document.querySelector('.input-div-ft');
const heightInputDivIn = document.querySelector('.input-div-in');
const weightInput = document.getElementById('weight-input');
const submitButton = document.querySelector('.submit');
const page1 = document.querySelector('.page1-center');
const page2 = document.querySelector('.date-picker-container-center');

// Event Listeners
genderCheckbox.addEventListener('click', toggleGender);
unitsCheckbox.addEventListener('click', toggleUnits);
submitButton.addEventListener('click', submitForm);
ageInput.addEventListener('focus', movePlaceholderTextRight);
ageInput.addEventListener('focusout', movePlaceholderTextLeftEvent);
heightInputMetric.addEventListener('focus', movePlaceholderTextRight);
heightInputMetric.addEventListener('focusout', movePlaceholderTextLeftEvent);
heightInputFt.addEventListener('focus', movePlaceholderTextRight);
heightInputFt.addEventListener('focusout', movePlaceholderTextLeftEvent);
heightInputIn.addEventListener('focus', movePlaceholderTextRight);
heightInputIn.addEventListener('focusout', movePlaceholderTextLeftEvent);
weightInput.addEventListener('focus', movePlaceholderTextRight);
weightInput.addEventListener('focusout', movePlaceholderTextLeftEvent);

// Functions
function toggleGender(event) {
    console.log(genderCheckbox.checked);
}

function toggleUnits(event) {
    let isImperial = unitsCheckbox.checked;

    if (isImperial) {
        heightInputDivMetric.classList.add('hidden');
        heightInputDivFt.classList.remove('hidden');
        heightInputDivIn.classList.remove('hidden');
    } else {
        heightInputDivFt.classList.add('hidden');
        heightInputDivIn.classList.add('hidden');
        heightInputDivMetric.classList.remove('hidden');
    }

    let weightText = weightInput.nextElementSibling;
    if (!weightText.classList.contains('right-justify')) {
        weightText.innerHTML = unitsCheckbox.checked ? 'Current Weight (lb)' : 'Current Weight (kg)';
    } else {
        weightText.innerHTML = unitsCheckbox.checked ? 'lb' : 'kg';
    }
}

function submitForm(event) {
    event.preventDefault();
    //page1.classList.add('offscreen');

    var elmntToView = document.querySelector(".submit.blue-text");
    elmntToView.scrollIntoView({behavior: 'smooth'}); 
    title.classList.add('blue-text');
}

function movePlaceholderTextRight(event) {
    let placeholderText = event.target.nextElementSibling;
    placeholderText.classList.add('right-justify');

    if (event.target === ageInput) {
        placeholderText.innerHTML = 'Years'
    } else if (event.target === heightInputMetric) {
        placeholderText.innerHTML = 'cm';
    } else if (event.target === heightInputFt) {
        placeholderText.innerHTML = 'ft';
    } else if (event.target === heightInputIn) {
        placeholderText.innerHTML = 'in';
    } else {
        placeholderText.innerHTML = unitsCheckbox.checked? 'lb': 'kg';
    }
}

function movePlaceholderTextLeftEvent(event) {
    movePlaceholderTextLeft(event.target);
}

function movePlaceholderTextLeft(element) {
    let placeholderText = element.nextElementSibling;

    if (element.value == "") {
        placeholderText.classList.remove('right-justify');

        if (element === ageInput) {
            placeholderText.innerHTML = 'Age'
        } else if (element === heightInputMetric) {
            placeholderText.innerHTML = 'Height (cm)';
        } else if (element === heightInputFt) {
            placeholderText.innerHTML = 'Height (ft)';
        } else if (element === heightInputIn) {
            placeholderText.innerHTML = '(in)';
        } else {
            placeholderText.innerHTML = unitsCheckbox.checked? 'Current Weight (lb)' : 'Current Weight (kg)';
        }
    }
}