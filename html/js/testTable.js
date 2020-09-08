function calculate() {
  var row, mile, time;
  var miles = document.getElementById('inputMiles').value;
  var pace = document.getElementById('inputPace').value;
  var chart = document.getElementById('paceChart');

  for (var i=1; i<miles+1; i++) {
    row = chart.insertRow(i-1);
    mile = row.insertCell(0);
    time = row.insertCell(1);
    mile.innerHTML = i;
    time.innerHTML = i*pace;
  }

  row = chart.insertRow(0);
  row.insertCell(0).innerHTML = "MILE";
  row.insertCell(1).innerHTML = "TIME";
}
