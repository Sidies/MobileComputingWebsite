
var currentLocation = null;
var dom_location = null;
var locationsHistory = [{ lat: 48.974, lng: 10.311 }];

// This function will be called after page has been loaded
$(function() {

    dom_location = document.getElementById("geoloc");
    
});

function addCurrentLocationToHistory() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLocationWithHistory, showError);
    } else { 
        currentLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
    
}

function setLocationWithHistory(location) {
    var lati = location.coords.latitude;
    var longi = location.coords.longitude;
    currentLocation = {lat: lati, lng: longi};
    locationsHistory.push(currentLocation);

    showCurrentPosition();
    drawLine();
}

function showCurrentPosition() {
    dom_location.innerHTML = "Latitude: " + currentLocation.lat + 
    "<br>Longitude: " + currentLocation.lng;	
    setMarkerAndPosition(currentLocation.lat, currentLocation.lng);
}

function showPosition(position) {
    dom_location.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;	
    setMarkerAndPosition(position.coords.latitude, position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            currentLocation.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            currentLocation.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            currentLocation.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            currentLocation.innerHTML = "An unknown error occurred."
            break;
    }
}

