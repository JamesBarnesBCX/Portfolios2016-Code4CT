function playerPick(cell) {

  if (isFull() === false) {
    cell.innerHTML = "X";

    setTimeout(function() {

      if (isFull() === false) {
        computerPick();
      } else {
        alert("Table is full!");
      }

    }, 1000);

  } else {
    alert("Still full!");
  }

}

function computerPick() {
  var r = Math.floor(Math.random()*3);
  var c = Math.floor(Math.random()*3);

  var m = document.getElementById('gameTable').rows[r].cells[c].innerHTML;

  while(m ==! "") {

    r = Math.floor(Math.random()*3);
    c = Math.floor(Math.random()*3);

    m = document.getElementById('gameTable').rows[r].cells[c].innerHTML;
  }

  document.getElementById('gameTable').rows[r].cells[c].innerHTML = "O";


}

function isFull() {

  for ( r = 0; r < 3; r++) {
    for (c = 0; c < 3; c++) {
      var block = document.getElementById('gameTable').rows[r].cells[c].innerHTML;

      if (block != "O" && block != "X") {
        return false;
      }

    }
  }
  return true;

}

function getColumn(c) {
  var results = "";
  for ( var r = 0; r < 3; r++) {
    result += document.getElementById('gameTable').rows[r].cells[c].innerHTML;
  }
}

function getRow(r) {
  var result = "";
  for (var c = 0; c < 3; c++) {
    result += document.getElementById('gameTable').rows[r].cells[c].innerHTML;
  }
}

function isWin(winning) {
  var success = winning + winning + winning;
}
