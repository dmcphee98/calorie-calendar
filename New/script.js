const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', calculateTDEE);


function calculateTDEE(event) {
    event.preventDefault();
    
    // TODO: Input validation

    let gender = document.querySelector('input[name="gender"]:checked').value;
    let age = document.getElementById('age').value;
    let units = document.querySelector('input[name="units"]:checked').value;
    let height = document.getElementById('height_cm').value;
    let weight = document.getElementById('weight_kg').value;
    let activity_multiplier = document.querySelector('input[name="activity_level"]:checked').value;

    let BMR;
    if (gender=="MALE") {
        BMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else {
        BMR = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }
    let TDEE = activity_multiplier * BMR;

    console.log(TDEE);

    calculateDailyCalories(TDEE);
}

function calculateDailyCalories(TDEE) {
    let currentDate = new Date()
    let goalDate = document.getElementById('goal_date').value;
    new Date()
    let numDays = goalDate - new Date()
    console.log(goalDate);
}

function calculateBMI(event) {
    event.preventDefault();
    let weight = document.getElementById('weight_kg').value;
    console.log(weight);
}