// Selectors
const datePicker = document.querySelector('.date-picker');
const mth = document.querySelector('.mth');
const nextMonth = document.querySelector('.next-month');
const prevMonth = document.querySelector('.prev-month');
const days = document.querySelector('.days');


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;


mth.textContent = months[month] + ' ' + year;
populateDays(month);

// Event Listeners
nextMonth.addEventListener('click', incrementMonth)
prevMonth.addEventListener('click', decrementMonth)

// Functions
function incrementMonth(e) {
    if (++month > 11) {
        month = 0;
        year++;
    };
    mth.textContent = months[month] + ' ' + year;
    populateDays();
}

function decrementMonth(e) {
    if (--month < 0) {
        month = 11;
        year--;
    };
    mth.textContent = months[month] + ' ' + year;
    populateDays();
}


// Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth (month, year) {
    return new Date(year, month+1, 0).getDate();
}

function populateDays() {
    // Clear all existing days
    days.innerHTML = '';
    // Should be equal to 35 by end of function
    let totalDays = 0;
    // Get day of week of first day of month
    let date = new Date(year, month, 1);

    // Add days from previous month
    for (let j = date.getDay(); j > 0; j--, totalDays++) {
        var yesterday = new Date(date.getTime());
        yesterday.setDate(date.getDate() - j);
        console.log(yesterday.getDate());
        addDay(yesterday.getDate(), false);
    }
    // Add days from current month
    for (let i = 0; i < daysInMonth(month, year); i++, totalDays++) {
        addDay(i + 1, true);
    }
    // Add days from next month
    let k = 1
    while (totalDays < 42) {
        addDay(k++, false);
        totalDays++;
    }
}

function addDay(textContent, currentMonth) {
    const day = document.createElement('div');
    
    if (currentMonth) day.classList.add('day');
    else day.classList.add('day-othermonth');

    day.textContent = textContent;
    days.appendChild(day);
}
