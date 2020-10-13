// Global Variables
var startTime, stopTime, str;
var highScore = Number.POSITIVE_INFINITY;

// 24 crayon colors
var wordMix = ["red", "yellow", "blue", "brown", "orange", "green", "violet", "black", "carnation pink", "yellow orange", "blue green", "red violet", "red orange", "yellow green", "blue violet", "white", "violet red", "dandelion", "cerulean", "apricot", "scarlet", "green yellow", "indigo and gray"];


function start() {
  var input = document.getElementById("input");
  str = "";
  try {
    var difficulty = document.querySelector('input[name=difficulty]:checked').value;
  }
  catch(error) {
    alert("A difficulty has not yet been selected.")
    return;
  }

  var length = (difficulty == "beginner")? 3:5

  //Initialize string to type
  for (var i = 0; i < length; i++)
    str += wordMix[Math.floor(Math.random()*wordMix.length)] + " ";
  str = str.substring(0, str.length-1);

  //Initialize time
  var dateTime = new Date();
  startTime = new Date();

  document.getElementById("instructions").value = str;
  input.value = "";
  input.focus();

  document.getElementById("input").onkeydown = function(event) {
      if (event.keyCode == 13) {
          stop();
      }
  }
}

function stop() {
  var stopTime = new Date();
  var timeElapsed = (stopTime - startTime)/1000;
  var timeLetter = (timeElapsed / document.getElementById("instructions").value.length).toFixed(3);

  if (isNaN(startTime)) {
    alert("You haven't even started yet!")
    return;
  }

  if (document.getElementById("input").value==str) {
    var newHS = timeLetter < highScore;
    highScore = newHS? timeLetter : highScore;
    var extra = newHS? "NEW HIGHSCORE": "Highscore"
    alert(extra + ": " + highScore + " seconds per letter\n\nCongratulations, you got it! \n\nTotal Time: " + timeElapsed + " seconds\nTime per Letter: " + timeLetter + " seconds\n\nClick \"OK\" or press \"Enter\" to try again!");
  }
  
  else
    alert("High Score: " + highScore + " seconds per letter\n\nNot quite, better luck next time! \n\nTotal Time: " + timeElapsed + " seconds\nTime per Letter: " + timeLetter + " seconds\n\nClick \"OK\" or press \"Enter\" to try again!");

  start()
}
