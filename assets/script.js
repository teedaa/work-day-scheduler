//variables

var currentDate = moment().format("[Today is] LL");
var currentTime = moment().format("LTS");
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn")

$(document).ready(function (){
    
//display current date
currentDay.append(currentDate);

//save current schedule text to local storage

saveBtn.on("click", function(event){
  event.preventDefault();
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})


})


