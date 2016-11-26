setActive();

function setActive() {

  var urlLocation = window.location.href;

  var locationArray = urlLocation.split('/');
  var arrayLength = locationArray.length -1;
  var currentPage = locationArray[arrayLength];

  var links = document.querySelectorAll("nav ul li a");

  for (var i = 0; i < links.length; i++) {
    var linkHref = links[i].href;

    var position = linkHref.indexOf(currentPage);

    if (position !== -1) {
      links[i].classList.add("active");
    }
  }

}

setActive();

function expand() {
  var article = document.getElementById("articleContent");
  

  if (article.className.indexOf("expanded") === -1) {
    article.classList.add("expanded");
  } else {
      article.classList.remove("expanded");
  }

  console.log(article.className.indexOf("expanded"));

}
