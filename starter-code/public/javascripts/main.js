$(document).ready(function(){


  var markers = [];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
  });

  var center = {
    lat: undefined,
    lng: undefined
  };


  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function (position) {

      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(center);
      //getPool();
      placePools(map,myPools);
    }, function () {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

  /*document.getElementById('submit').addEventListener('click', function() {
    $.ajax({
      url: "http://localhost:3000/api/search?lat=" + center.lat + "&lng=" + center.lng + "&dis=" + document.getElementById('maxDistance').value,
      method: 'GET',
      success: function(pools) {
        console.log('pools', pools);
        deleteMarkers();
        placePools(pools);
      },
      error: function(error) {
        console.log('error');
      }
    });
  });*/

  function deleteMarkers() {
    markers.forEach(function(marker) {
      marker.setMap(null);
      marker = null;
    });
    markers = [];
  }

  function getPool() {
    $.ajax({
      url: "http://localhost:3000/api",
      method: 'GET',
      success: placePools,
      error: function(error) {
        console.log('error');
      }
    });
  }

  function placePools(map, pools){
    var bounds = new google.maps.LatLngBounds();
    pool.forEach(function(pool){
        var center = {
          lat: pool.location.coordinates[0],
          lng: pool.location.coordinates[1]
        };
        bounds.extend(center);
        var pin = new google.maps.Marker({
          position: center,
          map: map,
          title: pool.name
        });
        markers.push(pin);
    });
    map.fitBounds(bounds);
  }

});
