// Inputs:			map as map object,
//					lat = float latitude,
//					lng = float longitude,
//					markerTitle as string.
function addMarker(mapObj,lat,lng,markerTitle,i)
{
	// Create position object.
	var position = new google.maps.LatLng(lat,lng);
	//Add info window content
	infowindows[i] = new google.maps.InfoWindow({

      content: "<h2 style='color: green'>"+resultsArray[i].name+"</h2>"+
      "<a href="+JSON.stringify(resultsArray[i].web_url)+">Hotel Website</a>"+
      "<div>Percent Recommend : "+JSON.stringify(resultsArray[i].percent_recommended)+" %</div>"+
      "<a href="+JSON.stringify(resultsArray[i].write_review)+">Write a Review</a>"+
      "<div>Price Level :<span style='color:gold'> "+JSON.stringify(resultsArray[i].price_level)+"</span></div>"
  	});
	
	var iconImage = "assets/tripadvisor_logo_marker.png";
	// Add the new marker to the master list.
	var newMarker = new google.maps.Marker({
		position: position,
		map: mapObj,
		title: markerTitle,
		icon: iconImage
	});
	// Add the new marker to the
	// list of markers.
	markers.push(newMarker);
	bounds.extend(position);
	//define infowindow
	google.maps.event.addListener(markers[i], 'click', function() {
    	infowindows[i].open(map,markers[i]);
  	});
  	markers[0]
}

function addSearchBox(initialText)
{
	// Create the HTML input element.
	var searchBox = document.getElementById("searchBox");
	// Add attributes and values to search box.
	var att1 = document.createAttribute("placeholder");
	att1.value = initialText;
	searchBox.setAttributeNode(att1);
	// Register the search box.
	// Set the index of the search box input amongst
	// its siblings in the HTML DOM tree.
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchBox);
	// Return the search box HTML element
	// so an event can be run when something
	// is searched.
	return searchBox;
}