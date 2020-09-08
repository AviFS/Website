window.onload = function() {
  // REGISTER AN ON CLICK EVENT FOR THE CALULATE BUTTON
  var calculateBtn = document.getElementById("calculate");
  calculateBtn.onclick = processMPG;
  // PLACE THE FOCUS ON THE MILES DRIVEN FIELD
  var milesDrivenField = document.getElementById("milesdriven");
  milesDrivenField.focus();
}

//var $ = function (id) { return document.getElementById(id); }

var processMPG = function() {
  // TASK 1: COLLECT THE INPUT FOR MILES DRIVEN
  //var milesDriven = parseFloat($("milesdriven").value);
  var m = document.getElementById("milesdriven");
  var milesDriven = parseFloat(m.value);

  // TASK 2: COLLECT THE INPUT FOR GALLONS USED
  //var gallons = parseFloat ($("ngallons").value);
  var g = document.getElementById("ngallons");
  var gallons = parseFloat(g.value);

  // TASK 3: VALIDATE THE INPUT
  if (isNaN(gallons) || isNaN(milesDriven)) {
    alert("One or more entries are not a number.");
  }

  else if (gallons <= 0) {
    alert("One or more entries are less than or equal to 0.");
  }

  // TASK 4: COMPUTE AND DISPLAY  MILES PER GALLON
  else {
    var mpg = milesDriven/gallons;
    var mpgTextField = document.getElementById("milespergallon");
    mpgTextField.value = mpg;
  }


}
