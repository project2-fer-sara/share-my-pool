// $(document).ready(function() {

  function initMap() {
    var myLatLng = {
      lat: myPool.location.coordinates[0],
      lng: myPool.location.coordinates[1]
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }
	initMap();
// });
