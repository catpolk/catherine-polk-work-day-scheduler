//using moment.js to disply day of the week and day of the month 
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// $("#currentHour").text(today.format('H'));


function hourUpdater() {
    var currHour = moment().hours();
    $("#currentHour").text(today.format('H'));

    $('.time-block').each(function () {
        var timeBlockHour = parseInt($(this).attr('id'));

        if (timeBlockHour < currHour) {
            $(this).addClass('past');
        } else if (timeBlockHour === currHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }

    });
}

hourUpdater(); 

$('.saveBtn').on("click", function() {
    let value = $(this).siblings('textarea').val();
    let key = $(this).parent().attr('id');
    if(value === ""){
        alert("Empty");
        return;
    }
    localStorage.setItem(key, value);
})

$('.time-block').each(function () {



