// THIS FILE CONTAINS LISTENER FUNCTIONS.
// THESE ARE FUNCTIONS THAT ARE CALLED BY
// LISTENERS THAT HAVE BEEN REGISTERED
// IN THE GOOGLE MAP.

// Create Google Map listener function.
function initialize()
{
	// Array containing initial options for the map.
	var mapOptions = {
		center: { lat: -34.397, lng: 150.644},
		zoom: 8
	};
	// Create the map object.
	map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);
	// Add controls to the map and
	// register event listeners for them.
	button_updateMap = addButton("Update Map", "This will refresh the map.");
	// Register listener for clicking "Update Map" button.
	google.maps.event.addDomListener(button_updateMap,'click',updateMap);
}

// Update map button listener function.
function updateMap()
{
	// THIS IS HERE AS A TEST.
	// Add a test marker.
	addMarker(map,-34.397,150.644,"Test");
}