//created varibles
let saveBtn = $('.saveButton')
let deleteBtn = $('.deleteButton')
let savedTasks= [];

//created calendar 
$(document).ready(function () {
    var calendarDay = moment().format('MMMM Do YYYY, h:mm:ss a');

    $('#currentDay').text('Today is' + calendarDay);
})

//created color coded time blocks
function currentHour () {
    let currentTime = moment().hour();
    let hour = $('.time-block');
    hour.each(function () {
       let thisHour = parseInt($(this).attr('id')) 
       if(thisHour === currentTime) {
           $(this).children('.col-9').attr('class', 'col-9').addClass('present');
       }
       else if (thisHour > currentTime) {
           $(this).children('.col-9').attr('class','col-9'.addClass('future'))
       }
       else {
           $(this).children('.col-9').attr('class','col-9').addClass('past')
       }
    });
}

//setup let saveButton = $('')

//setup let deleteButton = $('')
