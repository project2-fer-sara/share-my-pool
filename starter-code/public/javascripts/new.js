$(document).ready(function() {

	var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();
	$('#geocoder').on('click', function(e){
		e.preventDefault();
		geocodeAddress(geocoder, map);
	});

  function geocodeAddress(geocoder, resultsMap) {
	  var address = document.getElementById('address').value;
	  console.log("The address is " + address);
	  geocoder.geocode({'address': address}, function(results, status) {
	    if (status === 'OK') {
	      resultsMap.setCenter(results[0].geometry.location);
	      var marker = new google.maps.Marker({
	        map: resultsMap,
	        position: results[0].geometry.location
	      });
	      document.getElementById('lat').value = results[0].geometry.location.lat();
	      document.getElementById('lon').value = results[0].geometry.location.lng();
				var $button = $('<input>').attr('type','submit').attr('value','Create the pool');

				$("#restform").append($button);
			} else {
	      alert('Geocode was not successful for the following reason: ' + status);
	    }
	  });
	}
});
