//variables

var currentDate = moment().format("[Today is] dddd, MMM, Do YYYY");
console.log(currentDate);
var currentTime = moment().hour();
var saveBtn = $(".saveBtn");
var currentDay = $("#currentDay");


//display current date
$(document).ready(function (){
    
currentDay.append(currentDate);
})


