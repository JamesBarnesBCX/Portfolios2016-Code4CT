var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


function changeColour(){

var body = document.getElementById("body");

var colour = "#" + Math.floor((Math.random() * 500000) + 1);

body.style.backgroundColor = colour;

setTimeout(changeColour, 2000);

console.log(colour);

}

changeColour();
