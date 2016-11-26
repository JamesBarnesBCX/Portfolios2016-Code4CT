function setActive() {

  //get the url location on the window object and store it in a variable called urlLocation
var urlLocation = window.location.href;
console.log(urlLocation);

var splitUrlLocation = urlLocation.split('/');
var arrayLength = splitUrlLocation.length  -1;
var currentPage = splitUrlLocation[arrayLength];

console.log(splitUrlLocation);
console.log(arrayLength);
console.log(currentPage);

var links = document.querySelectorAll("nav ul li a");
console.log(links);


  for (var i=0; i<links.length; i++ ) {
    var linkHref = links[i].href;
    console.log(linkHref);

var position = linkHref.indexOf(currentPage);


if (position !== -1) {
  links[i].classList.add("active");
  console.log("yeah");
 } else {
  console.log("oh nooo!");
  }
 }
}



setActive();


function expandText() {
  var article = document.getElementById("article-content");
  article.classList.add("expanded");

  console.log(article.className);
};

if (article.className.indexOf("expandText") ===  -1) {
  article.classList.add("expandText");
} else {
  article.classList.remove("expandText")
}
