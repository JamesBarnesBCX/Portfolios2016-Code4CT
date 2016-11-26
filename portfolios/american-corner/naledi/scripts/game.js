function pickSpot(cell){
  var counter = 0;
  if (cell.innerHTML != "x" && cell.innerHTML != "o" && counter<3) {
    cell.innerHTML="x";
    counter++;
    if (isWin("x")) {
      alert("YOU WON!!! HURRAY!!!");
    }
    if (isWin("o")) {
      alert("Uwenk Uwenk Uwenk!!! You lost... Better Luck next time");
    }
    setTimeout(function() {
      compMove();
    }, 1000);
  }else {
    alert("Oops! As you can see!! THE SPACE IS OCCUPIED!!!");
  }
/*  setTimeout(function() {
    compMove();
  }, 1000);*/
}
function compMove(){
  var r = Math.floor(Math.random() * 3);
  var c = Math.floor(Math.random()*3);
  //var value='o';
  var move = document.getElementById('gameTable').rows[r].cells[c].innerHTML;
  //document.getElementById('gameTable').rows[r].cells[c].innerHTML=value;

  while (move == 'o' || move == 'x' ) {
    r = Math.floor(Math.random() * 3);
    c = Math.floor(Math.random()*3);
     move = document.getElementById('gameTable').rows[r].cells[c].innerHTML;
  }
  document.getElementById('gameTable').rows[r].cells[c].innerHTML='o';

}

function isFull(){
  for (var r = 0; r < 3; r++) {
    for(var c = 0; c< 3; c++){
      var full = document.getElementById('gameTable').rows[r].cells[c].innerHTML;
      if (full != 'o' || full != 'x') {
        return true;
      }
    }
  }
  return false;
}

function getRow(r){
  var result = " ";
  for (var c = 0; c < 3; c++) {
    result += document.getElementById('gameTable').rows[r].cells[c].innerHTML;
  }
}

function getCol(c){
  var result = " ";
  for( var r = 0; r < 3; r++){
    result += document.getElementById('gameTable').rows[r].cells[c].innerHTML;
  }
}

function getDi(){
  for( var pos = 0; pos < 3; pos++){
    result += document.getElementById('gameTable').rows[pos].cells[pos].innerHTML;
  }
}

function getDia(){
  for( var pos = 0; pos < 3; pos++){
    result += document.getElementById('gameTable').rows[2-pos].cells[2-pos].innerHTML;
  }
}

function isWin(medal){
  var winner = medal + medal + medal;

  for(var i = 0; i < 3; i++){
    if (getCol(i) == winner || getRow(i) == winner) {
      return true;
      }
  if(getDi(i) == winner || getDia(i) == winner) {
    return true;
      }
    }
    return false;
  }
/*
//   if (pickSpot == 3) {
//     alert("Well done! YOU WIN!!!!!");
//   } else {
//     alert("Uwenk uwenk uwenk!!! Aww Hardy Fella!");
//   }
// }
*/
