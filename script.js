//using moment.js to disply day of the week and day of the month 
var today = moment(); 
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

//using moment.js to apply military time to the function, time blocks 
function hourUpdater() {
    var currHour = moment().hours();

    $('.time-block').each(function () {
        var timeBlockHour = parseInt($(this).attr('id'));
//goes throught each hour and checks if it is a current hour or not
//and applies the color code for each accordinng to whether it is past, present, or future. 
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
//calling the function
hourUpdater(); 
//save buttons that save data to the local storage with the key(id) and value(textarea)
$('.saveBtn').on("click", function() {
    let value = $(this).siblings('textarea').val();
    let key = $(this).parent().attr('id');
    if(value === ""){ //does not allow to save an empty event
        alert("Please write your event");
        return;
    }
    localStorage.setItem(key, value);
})
//Itterates through each id, checks local storage for value and passes it to the text area
$('.time-block').each(function(){
    var id = $(this).attr('id');
    
    $('#'+ id + ' .description').val(localStorage.getItem(id));
});




