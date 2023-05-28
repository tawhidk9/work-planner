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
  var currentHour = currentDay.format("H");

  $('.time-block').each(function () {
    var time = parseInt($(this).attr('id').split("time")[1]);

    console.log("Current Hour: " + currentHour);
    console.log("Time Block: " + time);

    if (time < currentHour) {
      console.log("Past");
      $(this).addClass('past');
      $(this).removeClass('present future');
    } else if (time == currentHour) {
      console.log("Present");
      $(this).addClass('present');
      $(this).removeClass('past future');
    } else {
      console.log("Future");
      $(this).addClass('future');
      $(this).removeClass('past present');
    }
  });
}
    
    colorChange();
    
    setInterval(function () {
      colorChange();
    }, 1000 * 60);


