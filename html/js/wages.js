
//var $ = function (id) { return document.getElementById(id); }

function display() {
  // TASK 1: COLLECT THE INPUT FOR WAGES
  var rate = parseFloat(document.getElementById("rate").value);

  // TASK 2: COLLECT THE INPUT FOR GALLONS USED
  //var gallons = parseFloat ($("ngallons").value);
  var hours = parseFloat(document.getElementById("hours").value);

  // TASK 3: VALIDATE THE INPUT
  if (isNaN(rate) || isNaN(hours)) {
    alert("One or more entries are not a number.");
  }

  else if (hours <= 0) {
    alert("Hours is less than or equal to 0");
  }

  // TASK 4: COMPUTE AND DISPLAY  MILES PER GALLON
  else {
    (hours<40)? normalHrs = hours*rate : normalHrs = 40*rate;
    (hours<40)? overtime = 0 : overtime = (hours-40)*rate*1.5;
    total = normalHrs+overtime;
    document.getElementById("normalHrsDisplay").innerHTML = "$" + normalHrs;
    document.getElementById("overtimeDisplay").innerHTML = "$" + overtime;
    document.getElementById("totalDisplay").innerHTML = "$" + total;
  }


}
