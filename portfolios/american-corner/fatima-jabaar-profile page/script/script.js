function setActive() {
  //get the url location on the window object and store it in a variable called urlLocation
  var urlLocation = window.location.href;
  console.log(urlLocation);
  //split the urlLocation and store it in a new variable called locationArray
  var locationArray = urlLocation.split('/');
  var arrayLength = locationArray.length -1;
  var currentPage = locationArray[arrayLength];

  console.log(currentPage);

  //use querySelectorAll to get all <a> tags inside the <nav> and store them in a new variable called links
  var links = document.querySelectorAll("nav ul li a");
  console.log(links);

  for (var i = 0; i < links.length; i++) {
    var linkHref = links[i].href;

    var position = linkHref.indexOf(currentPage);

    if (position !== -1) {
  //    console.log(linkHref);
      links[i].classList.add("active");

    }
  }
  //loop though the links array and get the "href" attribute and store it in a new variable linkHref

    //use indexOf to check if the value in the "page" variable is in the array linkHref
      //if it is not, add the class "active" to links[].classList
}
setActive();


function readme() {
  var article = document.getElementById('articleContent');

  console.log(article.className);

  if (article.className.indexOf("expanded") === -1) {
    article.classList.add("expanded");
  } else {
  article.classList.remove("expanded");
  }
}
