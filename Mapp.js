// var markerArray = [];
// var map;
// var city;
// var geocoder;

function initMap() {
	var self = this;
    city = new google.maps.LatLng(40.783060, -73.971249);
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.783060, lng:-73.971249},
    zoom: 13
  });
  
  var geocoder = new google.maps.Geocoder();
  
  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

  //  var marker = new google.maps.Marker({
  //   position: city,
  //   map: map,
  //   animation: google.maps.Animation.DROP,
  //   title: 'Hello World!'
  // });
  //  setMarkers(markers);
  //  marker.addListener('click', toggleModal());
  //  marker.setMap(map);

  //  setAllMap();
}
ko.applyBindings(new initMap());


function geocodeAddress(geocoder, resultsMap){
  var address = document.getElementById('address').value;
  geocoder.geocode({'address':address}, function(results, status){
    if (status === google.maps.GeocoderStatus.OK){
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


//Determines if markers should be visible
//This function is passed in the knockout viewModel function
// function setAllMap() {
//   for (var i = 0; i < markers.length; i++) {
//     if(markers[i].boolTest === true) {
//     markers[i].holdMarker.setMap(map);
//     } else {
//     markers[i].holdMarker.setMap(null);
//     }
//   }
// }




