function pickSpot(cell){

  if (cell.innerHTML != "x" && cell.innerHTML != "o") {
      cell.innerHTML="x";
      if (isWin("x")) {
        alert("You won!!! Yippeee!!");
      }
      if (isWin("o")) {
        alert("Shame...you lost. Better luck next time.");
      }
      else{
        setTimeout(function() {
          compMove();
        }, 500);
      }
  }else {
    alert("Oops! As you can see!! THE SPACE IS OCCUPIED!!!");
  }
  /*setTimeout(function() {
    compMove();
  }, 500);
*/

}

function compMove(){
  var r = Math.floor(Math.random() * 3);
  var c = Math.floor(Math.random()*3);
  //document.getElementById('gameTable').rows[r].cells[c].innerHTML = "o";
  var move =  "o";

  //var count = 0;

//for(count = 0; count < 3; count++) {
  while(document.getElementById('gameTable').rows[r].cells[c].innerHTML=="x" || document.getElementById('gameTable').rows[r].cells[c].innerHTML== "o" ) {
   // choose new cell
   r = Math.floor(Math.random() * 3);
   c = Math.floor(Math.random()*3);

   }
   document.getElementById('gameTable').rows[r].cells[c].innerHTML = move;

    //}
  }



    function isFull() {
      for(var r = 0; r < 3; r++){
        for(var c = 0; c < 3; c++){
          var check = document.getElementById('gameTable').rows[r].cells[c].innerHTML;
          if (check != "o" && check != "x") {
            return true;
          }
        }
      }
      return false;
    }

function getRow(r) {
  var result = " ";
  for (var c = 0; c < 3; c++) {
    result += document.getElementById('gameTable').rows[r].cells[c].innerHTML;
  }
}

function getCol(c){
  var result = " ";
  for (var r = 0; r < 3; r++) {
    result += document.getElementById('gameTable').rows[r].cells[c].innerHTML;
  }
}

function getDi() {
  var result;
  for (var pos = 0; pos < 3; pos++) {
  result += document.getElementById('gameTable').rows[pos].cells[pos].innerHTML;
    }
}

function getDia() {
  var result;
  for (var pos = 0; pos < 3; pos++) {
    result += document.getElementById('gameTable').rows[pos].cells[2-pos].innerHTML;
      }
    }

function isWin(medal){
  var winner = medal + medal + medal;

  for (var i = 0; i < 3; i++) {
    if (getCol(i) == winner || getRow(i) == winner )  {
      return true;
      }
      if (getDi(i) == winner || getDia(i) == winner) {
        return true;
      }
  }
  return false;
}
