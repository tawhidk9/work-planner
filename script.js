//DOM Elements
var timeBlock = document.querySelector(".container")
var currentDay = moment();

//Display current date/time with moment formatting
$("#today").text(currentDay.format("LLLL"));

//User Interaction
$("saveBtn").on("click", function(){
    var textInput = $(this).siblings(".text").val(); //grabs all values of text class
    var tIme = $(this).parent().attr("id"); //grabs id of parent div
    localStorage.setItem(textInput, tIme); //saves both to local storage
});


//Color Change Depending on Hour 

function colorChange(){
    var currentHour = currentDay.hours();

}
