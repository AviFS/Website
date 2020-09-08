
// Draw the Bulls Eye!!!!
function draw(canvas, context) {

    // Take User Input for Darkness Incrementer
    var darker = document.getElementById("darker").value/100;

    // Calculate Proportional Center Coordinates (X,Y) & Radius
    var centerX = canvas.width/2-30;
    var centerY = canvas.height/2-70;
    var radius = centerY < centerX? (centerY)/3.2: centerX/3.2;

    //Initialize Colors
    var r = 24, g = 200, b = 24;

    //Draw 3 Concentric Circles
    for (var i = 3; i > 0; i--) {
        context.beginPath();
        context.arc(centerX, centerY, radius*i, 0, 2 * Math.PI, false);
        context.fillStyle = 'rgb('+(r*=darker)+','+(g*=darker)+','+(b*=darker)+')';
        //context.lineWidth = 1;
        //context.strokeStyle = 'blue';
        //context.stroke();
        context.fill();
    }
}


// Redraw Canvas
function resize() {
  var canvas = document.getElementById('bulls-eye');
  var context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Call Draw Again with Redrawn Canvas
  draw(canvas, context);
}
