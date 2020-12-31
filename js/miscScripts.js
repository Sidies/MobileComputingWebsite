// Essentials

var trackingInterval = null;

function startTracking() {

    if ($('#mapbox').is(':hidden')) {
        $("#mapbox").slideDown();
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



