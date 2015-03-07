// THIS FILE CONTAINS LISTENER FUNCTIONS.
// THESE ARE FUNCTIONS THAT ARE CALLED BY
// LISTENERS THAT HAVE BEEN REGISTERED
// IN THE GOOGLE MAP.

// Create Google Map listener function.
function subSearch(callback)
{
	console.log('subSearch');
	var searchBoxVal = searchBox.value;
	// Convert search box entry to
	// latitude and longitude.
	// This is done using "Place"
	// library for Google Maps API.
	var place = autocomplete.getPlace();
	// Call function which pings the
	// Trip Advisor API.  It takes in
	// the value typed into the search
	// box and returns an array of all the
	// objects that turned up in the search.
	// The objects contain longitude,
	// latitude, name, etc.
	resultsArray = getHotels(place.geometry.location.lat(),place.geometry.location.lng(), callback);

}

function search()
{
	subSearch(function(){
		bounds = new google.maps.LatLngBounds();
		for(var i = 0; i < resultsArray.length; i++)
		{
			addMarker(map,resultsArray[i].latitude,resultsArray[i].longitude,resultsArray[i].name);
		}
		map.fitBounds(bounds);
	});
}


// Update map button listener function.


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
	searchBox = addSearchBox("Type a location...");
	autocomplete = new google.maps.places.Autocomplete(searchBox);
	// Create event listener for when autocomplete
	// items show up in the search box and one is clicked.
	google.maps.event.addListener(autocomplete,"place_changed",search);


}



