var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 21.0278, lng: 105.8342},
		zoom: 6,
  		mapTypeId: 'satellite'
	});
	var ctaLayer = new google.maps.KmlLayer({
		url: 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml',
		map: map
	});
	console.log(ctaLayer);
}