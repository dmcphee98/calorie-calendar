// Selectors
const genderCheckbox = document.getElementById('gender-toggle');
const genderLabel = document.querySelector('.gender-label');
const unitsCheckbox = document.getElementById('units-toggle');
const unitsLabel = document.querySelector('.units-label');
const ageInput = document.getElementById('age-input');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const submitButton = document.querySelector('.submit');
const formPage = document.querySelector('.form-container-center');

// Event Listeners
genderCheckbox.addEventListener('click', toggleGender);
unitsCheckbox.addEventListener('click', toggleUnits);
submitButton.addEventListener('click', submitForm);

ageInput.addEventListener('focus', movePlaceholderTextRight);
ageInput.addEventListener('focusout', movePlaceholderTextLeftEvent);
heightInput.addEventListener('focus', movePlaceholderTextRight);
heightInput.addEventListener('focusout', movePlaceholderTextLeftEvent);
weightInput.addEventListener('focus', movePlaceholderTextRight);
weightInput.addEventListener('focusout', movePlaceholderTextLeftEvent);

// Functions
function toggleGender(event) {
    console.log(genderCheckbox.checked);
}

function toggleUnits(event) {
    let heightText = heightInput.nextElementSibling;
    if (!heightText.classList.contains('right-justify')) {
        heightText.innerHTML = unitsCheckbox.checked ? 'Height (ft)' : 'Height (cm)';
    } else {
        heightText.innerHTML = unitsCheckbox.checked ? 'ft' : 'cm'; 
    }

    let weightText = weightInput.nextElementSibling;
    if (!weightText.classList.contains('right-justify')) {
        weightText.innerHTML = unitsCheckbox.checked ? 'Weight (lbs)' : 'Weight (kg)';
    } else {
        weightText.innerHTML = unitsCheckbox.checked ? 'lbs' : 'kg';
    }
}

function submitForm(event) {
    event.preventDefault();
    formPage.classList.add('offscreen');
}

function movePlaceholderTextRight(event) {
    console.log("ooft");
    let placeholderText = event.target.nextElementSibling;
    placeholderText.classList.add('right-justify');

    if (event.target === ageInput) {
        placeholderText.innerHTML = 'Years'
    } else if (event.target === heightInput) {
        placeholderText.innerHTML = unitsCheckbox.checked? 'ft' : 'cm';
    } else {
        placeholderText.innerHTML = unitsCheckbox.checked? 'lbs': 'kg';
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
        } else if (element === heightInput) {
            placeholderText.innerHTML = unitsCheckbox.checked? 'Height (ft)' : 'Height (cm)';
        } else {
            placeholderText.innerHTML = unitsCheckbox.checked? 'Weight (lbs)' : 'Weight (kg)';
        }
    }
}