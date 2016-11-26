function setActive() {

  //get the url location on the window object and store it in a variable called urlLocation
  var urlLocation = window.location.href;
  //console.log(urlLocation);

  //split the urlLocation and store it in a new variable called locationArray
  var locationArray = urlLocation.split("/");
  var arrayLength = locationArray.length -1;
  var currentPage = locationArray[arrayLength];

  //console.log(currentPage);

  /*console.log(locationArray.length);
  console.log(locationArray[8]);*/

  //get the last item in the array using the length property... remember, the index position starts at 0...

  //use querySelectorAll to get all <a> tags inside the <nav> and store them in a new variable called links
  var links = document.querySelectorAll("nav ul li a");
  //console.log(links);

  //loop though the links array and get the "href" attribute and store it in a new variable linkHref
   for(var i = 0; i < links.length; i++){
     var linkHref = links[i].href;

    //use indexOf to check if the value in the "page" variable is in the array linkHref
     var position = linkHref.indexOf(currentPage);
  //if it is not, add the class "active" to links[].classList
     if (position !== -1) {
       links[i].classList.add("active");

     }
   }
}

function button() {
  var article = document.getElementById("articleContent");
  article.classList.add("expanded");

  console.log(article.className);

  if (article.className.indexOf("expanded") === -1) {
    article.classList.add("expanded");
  } else {

  }

}



setActive();
