$(function(){
    setInterval("rotateImages()", 4000);
    })

  function rotateImages(){
    var curPhoto= $('#slider div.current');
    var nextPhoto= curPhoto.next();
    if(nextPhoto.length==0)
      nextPhoto= $("#slider div:first");
      curPhoto.removeClass('current').addClass('previous');
      nextPhoto.css({opacity:0.0}).addClass('current').animate({opacity:1.0}, 3000, function(){
        curPhoto.removeClass('previous');

        });


    }

    var h=window.innerHeight;
    var w= window.innerWidth;
    document.getElementById(‘slider’).style.height=h;
    document.getElementById(‘slider’).style.width=w;
