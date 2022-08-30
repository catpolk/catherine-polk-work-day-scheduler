
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var dayWeek = today.format("dddd")
$("#weekDay").text(dayWeek);

var curDayofMonth = document.getElementById('currentDay');
var curDayofWeek = document.getElementById('weekDay');

document.textContent = curDayofMonth + curDayofWeek;
var titleEl = $('<p>');

//Day.js
// dayjs().hour() // gets current hour
// newDate = dayjs().hour(12) // returns new dayjs object
