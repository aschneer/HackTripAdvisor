

function getHotels(lat,long){

//
    console.log("click");
    var request = $.ajax({
            url: "http://api.tripadvisor.com/api/partner/2.0/map/"+lat+","+long+"?key=HackTripAdvisor-ade29ff43aed&category=hotels",
            type: "GET",            
            dataType: "json",
        });
        
        
        request.done(function(data) {
            // get 10 hotels
   
            for (var i = 0; i <10; i++){
            
                // console.log(JSON.stringify(data.data[i].name)); 
                // console.log(JSON.stringify(data.data[i].longitude));
                // console.log(JSON.stringify(data.data[i].latitude));
                 resultsArray[i] = JSON.stringify(data.data[i]);
            };

           
            // set global markers = stuff
            // Call map update fxn
        });

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




