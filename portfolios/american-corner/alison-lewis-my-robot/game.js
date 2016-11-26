function playerPick(t_cell){
 if(isFull() === false){
   t_cell.innerHTML = "X";
   setTimeout(function() {
     if(isFull() === false){
      computerMove();
    } else {
      document.getElementById('caption').innerHTML = '<p>Table is full!</p>';
   }
   },1000);
  } else {
     document.getElementById('caption').innerHTML = '<p>Table is full!</p>';
  }
} // fn closes

function computerMove(){
  var r = Math.floor(Math.random() * 3);
  var c = Math.floor(Math.random() * 3);

  var m = document.getElementById('tableboard').rows[r].cells[c].innerHTML;

  while(m !== ''){
    r = Math.floor(Math.random()*3);
    c = Math.floor(Math.random()*3);
    m = document.getElementById('tableboard').rows[r].cells[c].innerHTML;

  }
  document.getElementById('tableboard').rows[r].cells[c].innerHTML = "O"
}
function isFull() {
  for(var r = 0; r<3; r++){

    for(var c = 0; c<3; c++){
      var block = document.getElementById('tableboard').rows[r].cells[c].innerHTML;
      if(block != "O" || block != "X"){
        return false;
      }

    }
  }
     return true;
 }

 function isWin(userSymbol){
 var win = userSymbol + userSymbol + userSymbol;
   for (var g = 0; g < 3; g++){
     if(winRow(g)== win ){
      return true;

     }
 }

return false;
 }
function winRow(r){
  var rowValue = " ";
  for(var c = 0; c < 3; c++){
  rowValue = document.getElementById('tableboard').rows[r].cells[c].innerHTML;
  }
  return rowValue;
}
function winColumn(c){
  var columnvalue = " ";
  for (var d = 0; d < 3; d++){
    diagonalValue += document.getElementById('tableboard').rows[r].cells[c].innerHTML;
}
return columnValue;
}
function winDiagonal(d){
  var diagonalValue = " ";
  for (var d = 0; d < 3; d++){
    diagonalValue += document.getElementById('tableboard').rows[r].cells[c].innerHTML;
  }
}
