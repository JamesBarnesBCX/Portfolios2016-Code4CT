/*
Module 3 - Lesson 2
-------------------------------------------------------------------------------
*/

$(function() {

    $('.show-desc').on('click', function(event) {
        $(event.target).closest('.card').find('.card-reveal').slideToggle('slow');
    });

    $('.card-reveal .close').on('click', function(event) {
        $(event.target).closest('.card').find('.card-reveal').slideToggle('slow');
    });
});

var offersData = [{
    "place": "Japan",
    "image": "japan.jpg",
    "description": "None"
}, {
    "place": "Mexico",
    "image": "mexico.jpg",
    "description": "None"
}, {
    "place": "Hawaii",
    "image": "hawaii.jpg",
    "description": "None"
}, {
    "place": "Morocco",
    "image": "morocco.jpg",
    "description": "None"
}, {
    "place": "Tibet",
    "image": "tibet.jpg",
    "description": "None"
}, {
    "place": "Egypt",
    "image": "egypt.jpg",
    "description": "None"
}, {
    "place": "Italy",
    "image": "italy.jpg",
    "description": "None"
}, {
    "place": "Czech Repuplic",
    "image": "czech.jpg",
    "description": "None"
}, {
    "place": "Peru",
    "image": "peru.jpg",
    "description": "None"
}, {
    "place": "New Zealand",
    "image": "newzealand.jpg",
    "description": "None"
}, {
    "place": "Malaysia",
    "image": "malaysia.jpg",
    "description": "None"
}, {
    "place": "India",
    "image": "india.jpg",
    "description": "None"
}, {
    "place": "United States of America",
    "image": "usa.jpg",
    "description": "None"
}, {
    "place": "Russia",
    "image": "russia.jpg",
    "description": "None"
}];

function displayOffers(toDisplay) {
    $('#offers-area').html(''); //reset content

    for (var i = 0; i < toDisplay.length; i++) {
        var offer = offersData[toDisplay[i]];
        document.getElementById('offers-area').innerHTML += '<div class="col-md-6"><div class="card"><div class="card-image"><img class="img-responsive" src="img/' + offer.image + '"></div><div class="card-content"><span class="card-title">' + offer.place + '</span><button type="button" class="btn btn-custom pull-right" aria-label="Left Align"><i class="fa fa-share-alt"></i></button></div><div class="card-action"><a class="show-desc" target="new_blank">Read More</a><a href="#" target="new_blank">Book Now</a></div><div class="card-reveal"><span class="card-title">' + offer.place + '</span><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><p>' + offer.description + '</p></div></div></div>';
    }
}

var offersToDisplay = [0, 1, 2, 3, 4];
var page = 0;
displayOffers(offersToDisplay);

/* The code you need to work with is after this line */

function next() {
    console.log(page);
    if (page <2){
        page++;
    }


    // Your code start
    if (page == 1){
      offersToDisplay = [0,1,2,3,4];
    }
    else if (page == 2) {
      offersToDisplay = [5,6,7,8,9];
    }
    else {
      offersToDisplay = [10,11,12,13];
    }

    // Your code end
    displayOffers(offersToDisplay);
}

function previous() {
  page--;
  console.log(page);

  // Your code start
  if (page == 1){
    offersToDisplay = [0,1,2,3,4];
  }
  else if (page == 2) {
    offersToDisplay = [5,6,7,8,9];
  }
  else {
    offersToDisplay = [10,11,12,13];
  }

  // Your code end

  displayOffers(offersToDisplay);
}
