//DOM Elements
var timeBlock = document.querySelector(".container")
var currentDay = moment();

//Display current date/time with moment formatting
$("#today").text(currentDay.format("LLLL"));

//User Interaction
$(".saveBtn").on('click', function(){
    var textInput = $(this).siblings(".text").val(); //grabs all values of text class
    var tIme = $(this).parent().attr("id"); //grabs id of parent div
    localStorage.setItem(textInput, tIme); //saves both to local storage
});


//Color Change Depending on Hour 

function colorChange(){
    var currentHour = currentDay.hours();

    $('.time-block').each(function () {
        var time = parseInt($(this).attr('id').split("time")[1]);
    
        // if the time Id attribute is before the current hour, add the past class
        if (time < currentHour) {
          $(this).addClass('past');
        } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
        else if (time === currentHour) {
          $(this).addClass('present');
          $(this).removeClass('past');
        } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
        else {
          $(this).addClass('future');
          $(this).removeClass('past');
          $(this).removeClass('present');
        }
      });
    }
    
    colorChange();
    
    setInterval(function () {
      colorChange();
    }, 1000 * 60);


