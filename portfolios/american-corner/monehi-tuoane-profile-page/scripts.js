function setActive() {

  //get the url location on the window object and store it in a variable called urlLocation
  var urlLocation = window.location.href;


  //split the urlLocation and store it in a new variable called locationArray
  var splitLocationArray = urlLocation.split('/');

  var arrayLength = splitLocationArray.length -1;

  //get the last item in the array using the length property... remember, the index position starts at 0...
  var currentPage = splitLocationArray[arrayLength];


  //use querySelectorAll to get all <a> tags inside the <nav> and store them in a new variable called links
  var links = document.querySelectorAll("nav ul li a");


  //loop though the links array and get the "href" attribute and store it in a new variable linkHref
  for(var i =0; i< links.length; i++){
  var linkHref = links[i].href;


//use indexOf to check if the value in the "page" variable is in the array linkHref
var position = linkHref.indexOf(currentPage);

  if(position !== -1){
      //if it is not, add the class "active" to links[].classList
      links[i].classList.add("active");
  }else {
      //if it is not -1, add the class "active" to links[].classList
  }

  }


}

setActive();

function expend() {
  var article = document.getElementById("articleContent");


//use conditional statement to check if "expend" is NOT in the className...
if (article.className.indexOf("expended") === -1) {
  //add the class expended to article.classList
  article.classList.add("expended");
}else {
  //else remove the class expended from article.classList
  article.classList.remove("expended");
}

 console.log(article.className.indexOf("expended"));



}
