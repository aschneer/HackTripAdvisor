
//add markers

function getHotels(Lat,Long, callback){


    var request = $.ajax({
            url: "http://api.tripadvisor.com/api/partner/2.0/map/"+Lat+","+Long+"/hotels?key=HackTripAdvisor-ade29ff43aed",
            type: "GET",            
            dataType: "json"
        }).done( function(data) {
                // get 10 hotels
       
                for (var i = 0; i <10; i++){       
                     resultsArray[i] = data.data[i];
                }
                //Makes sure AJAX finishes before next function call 
                callback();

            } );
        
        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
        });
   

        return resultsArray;
};





