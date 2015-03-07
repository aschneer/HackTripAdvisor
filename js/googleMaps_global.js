// GLOBAL OBJECTS AND VARIABLES.

// Global map object.
var map;
// Array of all markers on the map.
var markers = [];
// Array of Info Windows.
var infowindows = [];
// Variable to hold the search box
// HTML element object.
var searchBox;
// Array to store the resulting
// objects from a Trip Advisor
// ping.
var resultsArray = [];
// autocomplete object for
// search box.

var autocomplete;
var bounds;
//integer of current window for Myo slide navigation
var currentwindow = 0;

var mapStyle = [
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#76aee3"
            },
            {
                "saturation": 38
            },
            {
                "lightness": -11
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#8dc749"
            },
            {
                "saturation": -47
            },
            {
                "lightness": -17
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#c6e3a4"
            },
            {
                "saturation": 17
            },
            {
                "lightness": -2
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#cccccc"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 13
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#5f5855"
            },
            {
                "saturation": 6
            },
            {
                "lightness": -31
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": []
    }
];