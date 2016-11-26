function randomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++ ) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

// Renders randomised colour pallete
function renderPallete() {
  var cells = '';

  for(var i = 0; i < 16; i++) {
    // Get random colour
    var palCol = randomColour();
    cells += '<div class="cell" style="background-color:' + palCol +'" onclick="robot.paint(this.style.backgroundColor)"></div>';

  }
  document.getElementById('colorPallete').innerHTML = cells;
}

robot.greeting();
renderPallete();
