function setActive() {

  //get the url location on the window object and store it in a variable called urlLocation
var urlLocation = window.location.href;
console.log(urlLocation);

  //split the urlLocation and store it in a new variable called locationArray
var splitUrlLocation = urlLocation.split('/');
console.log(splitUrlLocation);


  //get the last item in the array using the length property... remember, the index position starts at 0...
  //var length = console.log(splitUrlLocation.length);
  var currentPage = splitUrlLocation[splitUrlLocation.length - 1];
  console.log(currentPage);

  //use querySelectorAll to get all <a> tags inside the <nav> and store them in a new variable called links
var links = document.querySelectorAll( ".navv li a");
console.log(links);

  //loop though the links array and get the "href" attribute and store it in a new variable linkHref
for (var i = 0; i < links.length; i++) {
  //console.log(links[i]);
  var linkHref = links[i].href;
  var page = linkHref.indexOf(currentPage);
  //console.log(page);

  if (page !== -1 ) {
    links[i].classList.add("active");
  }else {
    console.log("sad");
  }
  console.log(linkHref);

}
//use indexOf to check if the value in the "page" variable is in the array linkHref
      //if it is not, add the class "active" to links[].classList

    }

setActive();

function expandText(currentbutton) {
var getting = document.getElementById("butooon").previousElementSibling;
// var newclass = getting.classList.add("expanded");
// console.log(getting.classList);
// console.log(getting.className);
// console.log(getting.className.indexOf("expanded"));
  if (getting.className.indexOf("expanded") === -1) {
    getting.classList.add("expanded");
}else{
  getting.classList.remove("expanded");
}
  }
