const ROW = 0;
const COL = 1;

var arr = [];
pieces = "Saba_pieces";
var blank = 8;
// This "moves" should be a stack, but there doesn't seem to be one
// already implemented in JS, and a mutable array is good enough
var moves = [];

function getId(row, col) {
  return document.getElementById("s" + ~~(i/3) + "_" + i%3);
}

function swap(swappee, swappoo) {
  var inter = arr[swappee];
  arr[swappee] = arr[swappoo];
  arr[swappoo] = inter;
}

function row(n) {
  // ~~n is essentially a bitwise and more efficient function equivalent to Math.trunc(n)
  return ~~(n/3);
}

function col(n) {
  return n%3;
}

function same(rc, a, b) {
  var rowOrCol = [row, col];
  var f = rowOrCol[rc], g = rowOrCol[(rc+1)%2];

  return f(a)==f(b) && Math.abs(g(a)-g(b))==1;
}

window.onload = function() {
  for (var i=9; i>-1; i--) {
    arr.push("./images/Saba_pieces/" + i + ".png");
  }
  set();
}

function set() {
  for (var i=0; i<9; i++) {
    document.getElementById("s" + row(i) + "_" + col(i)).src = arr[i];
  }
}

function move(id) {

  if (id == blank)
    return;

  else if (same(ROW, id, blank) || same(COL, id, blank)) {
    if (moves[moves.length-1] == id)
      moves.pop();
    else
      moves.push(blank);
    swap(id, blank);
    blank = id;
    set();
  }
  return;

}


//Implement Shuffle Algorithm and Button to shuffle puzzle pieces
