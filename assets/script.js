//variables

var currentDate = moment().format("[Today is] LL");
console.log(currentDate);
var currentTime = moment().format("LTS");
console.log(currentTime)
var saveBtn = $(".saveBtn");
var currentDay = $("#currentDay");


$(document).ready(function (){
    
//display current date
currentDay.append(currentDate);

//save current schedule text to local storage

saveBtn.on("click", function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
    
})
// display saved schedule from local storage
localStorage.getItem(time,text);


//color code
var colorCodeTime = function() {
    $(".hour").each(function(){
        var hourSection = parseInt($(this).attr("id"));

        if (time > hourSection){
            $(this).siblings("description").addClass("past");
        } 
        else if (time < hourSection){
            $(this).siblings("description").addClass("future");
        } 
        else {
            $(this).siblings("description").addClass("present");
        }
    });
};

})


