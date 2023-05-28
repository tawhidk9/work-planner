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
function colorChange() {
  var currentDay = moment();
  var currentHour = currentDay.format("H"); //moment format into hour

  $('.time-block').each(function () {
    var time = parseInt($(this).attr('id').split("time")[1]);

    console.log("Current Hour: " + currentHour);
    console.log("Time Block: " + time);
    
    //time less than current hour, adds past class and sets color to gray
    if (time < currentHour) {
      console.log("Past");
      $(this).addClass('past');
      $(this).removeClass('present future');
    //time equal to current hour, adds present class and sets color red
    } else if (time == currentHour) {
      console.log("Present");
      $(this).addClass('present');
      $(this).removeClass('past future');
    //time greater than currrent hour, adds future class and sets color green
    } else {
      console.log("Future");
      $(this).addClass('future');
      $(this).removeClass('past present');
    }
  });
}
    
// User Interaction
$(".saveBtn").on('click', function(){
  var textInput = $(this).siblings(".text").val(); // Get the value of the textarea
  var timeBlockId = $(this).parent().attr("id"); // Get the ID of the parent time block

  // Save the user's input in localStorage using the time block ID as the key
  localStorage.setItem(timeBlockId, textInput);
});

// Restore saved user input on page load
$(document).ready(function() {
  $('.time-block').each(function() {
      var timeBlockId = $(this).attr('id');
      var savedInput = localStorage.getItem(timeBlockId);

      if (savedInput) {
          $(this).find('.text').val(savedInput);
      }
  });
});    



//Call Functions
colorChange();
    
setInterval(function () {
    colorChange();
    }, 1000 * 60);


