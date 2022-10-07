//variables

var currentDate = moment().format("[Today is] LL");
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");


$(document).ready(function (){
    
//display current date
currentDay.append(currentDate);

//save current schedule text to local storage

saveBtn.on("click", function(event){
  event.preventDefault();
  var text = $(this).siblings(".description").val();
  var time = $(this).siblings("id").val();
    localStorage.setItem(time, text);
})

//display schedule

$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));


//color code
function colorCodeTime() {
    $('.description').each(function () {
        var currentTime = parseInt(moment().format("H"));
        var timeBlock = parseInt((this).id);
console.log(currentTime)
console.log(timeBlock)
        if (currentTime < timeBlock) {
            $(this).addClass("future")
            // .removeClass("past present");
        }
        else if (currentTime > timeBlock) {
            $(this).addClass("past")
            // .removeClass("present future");
        }
        else if (currentTime === timeBlock) {
            $(this).addClass("present")
            // .removeClass("past future")
        }
    });
}
colorCodeTime();
})


