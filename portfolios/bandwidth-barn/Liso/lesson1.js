


var image=1;
setInterval(function(){
  document.getElementById("top").style.background = 'url(img/0'+image+ '.jpeg ) center center no-repeat scroll';
  if (image==5){
    image=1;
  }else{
    image++;
  }
}
,5000);
