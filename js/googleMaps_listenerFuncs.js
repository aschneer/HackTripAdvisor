// THIS FILE CONTAINS LISTENER FUNCTIONS.
// THESE ARE FUNCTIONS THAT ARE CALLED BY
// LISTENERS THAT HAVE BEEN REGISTERED
// IN THE GOOGLE MAP.

// Create Google Map listener function.

function clearAllMap(callback){
	callback();
}

function subSearch(callback)
{
	//clear map
	clearAllMap( function(){
		for (var i = 0; i < markers.length; i++) {
    		markers[i].setMap(null);
  		}
		markers.length = 0;
		infowindows.length = 0;
		resultsArray.length = 0;
	});
	
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
	// empty arrays
	
	subSearch(function(){
		bounds = new google.maps.LatLngBounds();
		for(var i = 0; i < resultsArray.length; i++)
		{
			addMarker(map,resultsArray[i].latitude,resultsArray[i].longitude,resultsArray[i].name,i);
		}
		map.fitBounds(bounds);
		console.log(JSON.stringify(resultsArray[0]));
		
	});

	
}


// Update map button listener function.


function initialize()
{
	// Array containing initial options for the map.
	var mapOptions = {
		center: { lat: -34.397, lng: 150.644},
		zoom: 8,
		styles: mapStyle
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

	google.maps.event.addDomListener(window, 'keypress', function(e) {
       
    
          if (e.keyCode == 91 ) {// { - wave left for navigatin right
            //fxn
            // map.setCenter(JSON.stringify(data.data[i].name);
            // map.setZoom(10);
            console.log('left swipe');
          }
          if (e.keyCode == 93) {// } - wave right for navigating left
            //fxn
            console.log('right swipe');
          }
          if (e.keyCode == 91) {// | - open fingers open Website
            //fxn
            console.log('open hand');
          }
          // if (e.ctrlKey && e.keyCode == 87 || 119) {// cntrl + w/W - Fist Close Tab
          //   //fxn
          //   console.log('fist');
          // }
    });


}



