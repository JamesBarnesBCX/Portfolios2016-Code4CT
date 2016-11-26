function pickSpot(x){
  if(isFull()){
    alert("Game Over!");
  } else {

    if(x.innerHTML != "o" && x.innerHTML != "x"){
      x.innerHTML = "x";
      if(isAWin("x")){
        alert("You Win!");
      }
      if(isAWin("o")){
        alert("You Lose!");
      } else {
        setTimeout(function(){
          var r = Math.floor((Math.random() *3));
          var c = Math.floor((Math.random() *3));
          var computerMove = document.getElementById('board').rows[r].cells[c].innerHTML;

          while (computerMove == "o" || computerMove == "x" && isFull() == false){
             r = Math.floor((Math.random() *3));
             c = Math.floor((Math.random() *3));
             computerMove = document.getElementById('board').rows[r].cells[c].innerHTML;
          }
             document.getElementById('board').rows[r].cells[c].innerHTML;
        }, 1000);
      }
    }
    else if(x.innerHTML == "o" || x.innerHTML == "x"){

    }
  }
}

function isFull(){
  var results = "";
  for(r = 0; r < 3; r++)
    results += document.getElementById('board').rows[r].cells[c].innerHTML;
  return results;
}

function getRow(r){
  var results = "";
  for(c = 0; c < 3; c++)
    results += document.getElementById('board').rows[r].cells[c].innerHTML;
  return results;
}

function getDiagonal1(){
  var results = "";
  for(pos = 0; pos < 3; pos++)
    results += document.getElementById('board').rows[pos].cells[pos].innerHTML;
  return results;
}

function getDiagonal2(){
  var results = "";
  for(pos = 0; pos < 3; pos++)
    results += document.getElementById('board').rows[pos].cells[2-pos].innerHTML;
  return results;
}

function isAWin(userSymbol){
  concString = userSymbol + userSymbol + userSymbol;

  for(i = 0; i < 3; i++){
    if(getRow(i) == concString || getColumn() == concString)
    return true;
  }

  if(getDiagonal1() == concString || getDiagonal2( == concString)
  return true;
  return false;
}
