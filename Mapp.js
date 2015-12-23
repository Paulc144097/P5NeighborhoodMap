var markerArray = [];
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.714232, lng: -73.9612889},
    zoom: 13
  });


   var marker = new google.maps.Marker({
    position: {lat: 40.714232, lng: -73.9612889},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Hello World!'
  });
   marker.addListener('click', toggleModal());
   marker.setMap(map);
}


function toggleModal() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

