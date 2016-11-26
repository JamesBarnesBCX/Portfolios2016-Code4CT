function setActive() {

  //get the url location on the window object and store it in a variable called urlLocation

var urlLocation = window.location.href;
console.log(urlLocation);
  //split the urlLocation and store it in a new variable called locationArray
  var splitUrlLocation = urlLocation.split("/");
  var arraylength= splitUrlLocation.length -1;

  var currentPage = splitUrlLocation[arraylength];
  console.log(currentPage);


var links = document.querySelectorAll("nav ul li a");
console.log(links);
for (var i=0; i<links.length; i++){
  //console.log(links[i]);
  var linkHref = links[i].href;
  console.log(linkHref);

var position= linkHref.indexOf(currentPage);
console.log(position);

if(position !== -1){
links[i].classList.add("active");

    }

  }

}

setActive();

function button(){
  var article = document.getElementById('articleContent');
  article.classList.add("expanded");

  console.log(article.className);

  if(article.className.indexOf("expended") === -1){
    article.classList.add("epanded");
  }else{

  }
}
