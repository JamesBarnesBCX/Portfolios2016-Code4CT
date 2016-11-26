function expand() {
    var article = document.getElementById("article-content");
    console.log(article.className);
    if (article.className.indexOf("expanded") === -1) {
      article.classList.add("expanded");
    } else {
      article.classList.remove("expanded");
    }
}
