function  playerPick(t_cell) {
  if(isFull() === false) {
    t_cell.innerHTML ="x";
    setTimeout(function() {
    if(isFull() === false){
      computerMove();
    } else {
        document.getElementById('caption').innerHTML ='<p>Table is full!</p>';
    }
    },1000);
    if(isWin('x')){
      alert("YOU WON!");
    }

  } else {
    document.getElementById('caption').innerHTML ='<p>Table is full!</p>';

  }
} // fn closes

function computerMove() {
  var r = Math.floor(Math.random() * 3);
  var c = Math.floor(Math.random() * 3);
  var move = document.getElementById('tableboard').rows[r].cells[c].innerHTML;

  while(move!== '') {
    r = Math.floor(Math.random() * 3);
    c = Math.floor(Math.random() * 3);
    move = document.getElementById('tableboard').rows[r].cells[c].innerHTML;

  }
 document.getElementById('tableboard').rows[r].cells[c].innerHTML = "o";
}
function isFull() {
  for( var r = 0; r<3; r++){

    for( var c = 0; c<3; c++){
      var block= document.getElementById('tableboard').rows[r].cells[c].innerHTML;

      if(block === "") {
        valid++;
      }

    }
  }
  return true;
}

function isWin(userSymbol){
 var win = userSymbol + userSymbol + userSymbol
 
  for (var g = 0; g < 3; g++) {
   if(winRow(g) == win){
    return true;
   }
 }


}
function winRow(r){
  var rowValue = "";
  for (var c = 0; c < 3; c++) {
   rowValue += document.getElementById('tableboard').rows[r].cells[c].innerHTML;

  }
  return rowValue;
}
function winColumn(c) {
  var columnValue = "";
  for (var r = 0; r < 3; r++) {
   columnValue += document.getElementById('tableboard').rows[r].cells[c].innerHTML;

}
return columnValue;
}
function winDiagonal(h){
  var diagonalValue = "";
  for (var h  = 0; h < 3;h ++) {
   diagonalValue += document.getElementById('tableboard').rows[r].cells[c].innerHTML;

}
}
