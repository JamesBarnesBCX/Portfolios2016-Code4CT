function playerPick(cell) {

  if(isFull() === false) {
  cell.innerHTML = "x";

  setTimeout(function() {

    if(isFull() === false) {
      computerPlay();
    } else {
      alert("Table full ")
    }
  }, 1000);

 } else{
   alert("Table full ")
}
}

function computerPlay() {
  var r = Math.floor(Math.random()*3);
  var c = Math.floor(Math.random()*3);

 var m = document.getElementById('gameTable').rows[r].cells[c].innerHTML;



 while (m ==! "") {
   r = Math.floor(Math.random()*3);
   c = Math.floor(Math.random()*3);

   m = document.getElementById('gameTable').rows[r].cells[c].innerHTML;
 }

 document.getElementById('gameTable').rows[r].cells[c].innerHTML = "o";

 }

function isFull() {
  for (r = 0; r < 3; r++) {
    for (c = 0; c < 3; c++) {
      var block = document.getElementById('gameTable').rows[r].cells[c].innerHTML;

      if(block != "o" && block != "x") {
        return false;
      }

      }
    }
    return true;

}

function isWin()
