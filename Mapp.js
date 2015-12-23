var markerArray = [];
var map;

function initMap() {
	var self = this;

    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.714232, lng: -73.9612889},
    zoom: 13
  });



    this.get-city = function(){
    	var currentCity = this.city();
    	//do Something
    }




   var marker = new google.maps.Marker({
    position: {lat: 40.714232, lng: -73.9612889},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Hello World!'
  });
   setMarkers(markers);
   marker.addListener('click', toggleModal());
   marker.setMap(map);

   setAllMap();
}
ko.applyBindings(new initMap());


function toggleModal() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

//Determines if markers should be visible
//This function is passed in the knockout viewModel function
function setAllMap() {
  for (var i = 0; i < markers.length; i++) {
    if(markers[i].boolTest === true) {
    markers[i].holdMarker.setMap(map);
    } else {
    markers[i].holdMarker.setMap(null);
    }
  }
}

