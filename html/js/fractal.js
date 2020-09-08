function createCcurve() {
  var canvas = document.getElementById('mycircle');
  var canvasContext = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerWidth * 2;

  // Collect User Input
  var level = document.getElementById('nLevels').value;

  //Draw Fractal
  var x1 = canvas.width*2/3;
  var y1 = canvas.height/6;
  var x2 = x1;
  var y2 = canvas.height/2;

  drawCurve(canvasContext, x1, y1, x2, y2, level);

}


// Recursive Drawing Method
function drawCurve(canvasContext, x1, y1, x2, y2, level) {

  // Base Case
  if (level == 0) {

    var gradient = canvasContext.createLinearGradient(0, 0, 1000, 0);
    gradient.addColorStop("0", "green");
    gradient.addColorStop("0.33" ,"blue");
    gradient.addColorStop("0.66", "magenta");

    canvasContext.beginPath();
    canvasContext.moveTo(x1, y1);
    canvasContext.lineTo(x2, y2);
    canvasContext.strokeStyle = gradient;
    canvasContext.stroke();
  }

  else {
    var xn = (x1 + x2)/2 + (y1 - y2)/2;
    var yn = (x2 - x1)/2 + (y1 + y2)/2;

    drawCurve(canvasContext, x1, y1, xn, yn, level-1);
    drawCurve(canvasContext, xn, yn, x2, y2, level-1);
  }

}
