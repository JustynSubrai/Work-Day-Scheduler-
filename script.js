//created varibles
let saveBtn = $('.saveButton');
let deleteBtn = $('.deleteButton');
let savedTasks = [];
let eventEl = $('textarea')
var btnEl = $('.saveButton');

//created calendar 
$(document).ready(function () {
    let calendarDay = moment().format('MMMM Do YYYY, h:mm:ss a');

    $('#currentDay').text('Today is ' + calendarDay);
})

//created color coded time blocks
function currentHour() {
    let currentTime = moment().hour();
    let hour = $('.time-block');
    hour.each(function () {
        let thisHour = parseInt($(this).attr('id'))
        if (thisHour === currentTime) {
            $(this).children('.col-9').attr('class', 'col-9').addClass('present');
        }
        else if (thisHour > currentTime) {
            $(this).children('.col-9').attr('class', 'col-9'.addClass('future'))
        }
        else {
            $(this).children('.col-9').attr('class', 'col-9').addClass('past')
        }
    });
}

//setup let deleteButton = $('')
$(deleteBtn).on('click', function (event) {
    event.preventDefault();
    console.log(savedTasks);
    for (i = 0; i < savedTasks.length; i++) {
        localStorage.removeItem('saved-tasks');
        console.log(savedTasks[i].task)
    }
    $(this).siblings('.col-9').val('');
    console.log($(this).siblings());
})

$(window).on('load', function () {
    console.log(JSON.parse(localStorage.getItem('saved-tasks')));
    let saved = JSON.parse(localStorage.getItem('saved-tasks'));
    console.log(saved);
    let taskField = $('.col-9');
    let dayHours = $('.time-value');
    if (saved) {
        for (i = 0; i < saved.length; i++) {
            savedTasks.push(saved);
            console.log(dayHours);
            if (dayHours[i].innerHTML === saved[i].hours) {
                $(taskField[i]).text(saved[i].task);
            } else {
                $(taskField[i]).text();
            }

        }
    }
    currentHour();
});

function save() {
    if (eventEl[0].value !== "") {
        localStorage.setItem("9 AM", eventEl[0].value);
    }
    if (eventEl[1].value !== "") {
        localStorage.setItem("10 AM", eventEl[1].value);
    }
    if (eventEl[2].value !== "") {
        localStorage.setItem("11 AM", eventEl[2].value);
    }
    if (eventEl[3].value !== "") {
        localStorage.setItem("12 PM", eventEl[3].value);
    }
    if (eventEl[4].value !== "") {
        localStorage.setItem("1 PM", eventEl[4].value);
    }
    if (eventEl[5].value !== "") {
        localStorage.setItem("2 PM", eventEl[5].value);
    }
    if (eventEl[6].value !== "") {
        localStorage.setItem("3 PM", eventEl[6].value);
    }
    if (eventEl[7].value !== "") {
        localStorage.setItem("4 PM", eventEl[7].value);
    }
    if (eventEl[8].value !== "") {
        localStorage.setItem("5 PM", eventEl[8].value);
    }

}

function reloadLastsave()  {
    // using getItem to retrieve from local storage

    lastSaved = localStorage.getItem("9 AM");
    eventEl[0].value = lastSaved
    lastSaved = localStorage.getItem("10 AM");
    eventEl[1].value = lastSaved
    lastSaved = localStorage.getItem("11 AM");
    eventEl[2].value = lastSaved
    lastSaved = localStorage.getItem("12 PM");
    eventEl[3].value = lastSaved
    lastSaved = localStorage.getItem("1 PM");
    eventEl[4].value = lastSaved
    lastSaved = localStorage.getItem("2 PM");
    eventEl[5].value = lastSaved
    lastSaved = localStorage.getItem("3 PM");
    eventEl[6].value = lastSaved
    lastSaved = localStorage.getItem("4 PM");
    eventEl[7].value = lastSaved
    lastSaved = localStorage.getItem("5 PM");
    eventEl[8].value = lastSaved
}

// call function to retrieve event on planner after refresh
reloadLastsave();

// add eventlistenr to save the events into local storage
$(btnEl).click(function(event) {
    $(save).click(event);
});

