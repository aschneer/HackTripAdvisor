
//add markers

function getHotels(Lat,Long, callback){

    console.log("getHotels");
    var request = $.ajax({
            url: "http://api.tripadvisor.com/api/partner/2.0/map/"+Lat+","+Long+"/hotels?key=HackTripAdvisor-ade29ff43aed",
            type: "GET",            
            dataType: "json"
        }).done( function(data) {
                // get 10 hotels
       
                for (var i = 0; i <10; i++){       
                     resultsArray[i] = data.data[i];
                }

                callback();

            } );
        
        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
        });
   

        return resultsArray;
};

google.maps.event.addDomListener(window, 'keypress', function(e) {
       
    
          if (e.keyCode == 65 ) {//a
            //fxn
            // map.setCenter(JSON.stringify(data.data[i].name);
            // map.setZoom(10);
            console.log('left swipe');
          }
          if (e.keyCode == 68) {//d
            //fxn
            console.log('right swipe');
          }
          if (e.keyCode == 83) {//s
            //fxn
            console.log('fist');
          }
        });




