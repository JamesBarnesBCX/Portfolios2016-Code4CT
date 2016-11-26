function pick(cell) {
if(!isFull()){



  if (cell.innerHTML === '') {
    cell.innerHTML='x';
    if(isWin('x')){
      alert("dude");
    }
}

  setTimeout(function() {
    if(!isFull()){
      computerMove();
      if(isWin('x')){
        alert("dude");
      }
      }
    } , 1000);



} else {
  alert('table full');
}


}//end of pick()

function computerMove() {
  // Get random row and column
  var r = Math.floor(Math.random()*3);
  var c = Math.floor(Math.random()*3);
  // Have computer make a o in calculated cell
  var move=document.getElementById('Board').rows[r].cells[c].innerHTML;

  while(move=='o'|| move == 'x'){
    var r = Math.floor(Math.random()*3);
    var c = Math.floor(Math.random()*3);
    // Have computer make a o in calculated cell
    var move=document.getElementById('Board').rows[r].cells[c].innerHTML;

  }
  document.getElementById('Board').rows[r].cells[c].innerHTML ='o';

  }

function getRow(r){
    var result = ' ';

    for (c = 0; c <3; c++){
      result += document.getElementById('Board').rows[r].cells[c].innerHTML;
      return result;
      }
    }

  function getColumn(c){
    var result = ' ';

    for (r = 0; r <3; r++){
      result += document.getElementById('Board').rows[r].cells[c].innerHTML;
      return result;
      }
  }

  function getDiagonals(d){
    var result = ' ';

    for (d = 0; d <3; d++){
      result += document.getElementById('Board').rows[d].cells[d].innerHTML;
      return result;
      }
  }

  function getDiagonal(D){
    var result = '';

    for (D = 0; D <3; D++){
      result += document.getElementById('Board').rows[D].cells[D].innerHTML;
      return result;
      }
  }

  function isFull(){

    for (r = 0; r <3; r++){
      for (c = 0; c <3; c++){
        var block = document.getElementById('Board').rows[r].cells[c].innerHTML;
        if (block == ""){
          return false;
        }
      }

    }
      return true;
  }

function isWin(userSymbol){
  concString = userSymbol + userSymbol + userSymbol;

  for (i = 0; i <3; i++){
    if(getRow(i) == concString || getColumn(i) == concString){
      return true;
    }

  if (getDiagonal(i) == concString || getDiagonals(i) == concString){
    return true;
  }
  else{
    return false;
}
}
}
