// $(document).ready(function(){
//
// 	var titleTag = document.getElementById('poolName');
// 	var url = 'http://localhost:3000/api/' + titleTag.dataset.id;
//
// 	$.ajax({
//     url: url,
//     method: 'GET',
//     success: printMapAndMarker,
//     error: function(error) {
//       console.log('error');
//     }
//   });
//
//   function printMapAndMarker(restaurant){
//   	var position = {
//   	  lat: pool.location.coordinates[0],
//   	  lng: pool.location.coordinates[1]
//   	};
//
//   	var map = new google.maps.Map(document.getElementById('map'), {
//   	  zoom: 15,
//   	  center: position
//   	});
//
//   	var marker = new google.maps.Marker({
//       position: position,
//       map: map,
//       title: pool.name
//     });
//   }
// });
