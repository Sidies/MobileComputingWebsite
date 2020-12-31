// Essentials

var trackingInterval = null;

function startTracking() {

    if ($('#mapbox').is(':hidden')) {
        setStartLocation();        
        runEveryHalfMinute();
    }
    else {
        $("#mapbox").slideUp();
        clearInterval(trackingInterval);
    }

}

function runEveryHalfMinute() {
    trackingInterval = setInterval(addCurrentLocationToHistory, 3000);
}



