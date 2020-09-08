function convert() {
  var measure = document.querySelector('input[name=measurement]:checked').value;
  var quantity = parseFloat(document.getElementById("num").value);

  // arr = [inches, centimeters]
  if (measure == "inches")
    var arr = [quantity, quantity*2.54];
  else
    var arr = [quantity/2.54, quantity];

  document.getElementById("display").innerHTML = +arr[0].toFixed(4) + " inches is equivalent to " + +arr[1].toFixed(4) + " centimeters." +
  "<br> Thanks for playing!"
}
