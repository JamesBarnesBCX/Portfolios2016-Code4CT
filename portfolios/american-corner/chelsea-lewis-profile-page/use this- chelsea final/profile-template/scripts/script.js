
//expand read more button
function slideToggle(){
  var article = document.getElementById("paragraphContent");

  if(article.className.indexOf("expanded")=== -1){
  article.classList.add("expanded");
  }else {
    article.classList.remove("expanded");
  }
}




function setActive() {


  //get the url location on the window object and store it in a variable called urlLocation

var urlLocation = window.location.href;

  //split the urlLocation and store it in a new variable called locationArray
  var splitUrlLocation = urlLocation.split("/");

  var arraylength= splitUrlLocation.length -1;

  var currentPage = splitUrlLocation[arraylength];

  var links = document.querySelectorAll("nav ul li a");
  console.log(links);

  for (var i=0; i < links.length; i++){
    console.log(links[i]);
    var linkHref = links[i].href;
    console.log(linkHref);

    var position= linkHref.indexOf(currentPage);
    console.log(position);

    if(position !== -1){
      links[i].classList.add("active");
    }else {
      console.log("not active")
    }
  }
}
setActive();
