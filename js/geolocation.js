
var currentLocation = null;
var dom_location = null;
var locationsHistory = [startLocation];


// This function will be called after page has been loaded
$(function() {

    dom_location = document.getElementById("geoloc");
    
});

function setStartLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initStartLocation, showError);
    } else { 
        currentLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function initStartLocation(location) {
    startLocation = { lat: location.coords.latitude, lng: location.coords.longitude};
    initMap();
    $("#mapbox").slideDown();
}

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
    
    if(!locationsHistory.includes(currentLocation)) {
        locationsHistory.push(currentLocation);

        showCurrentPosition();
        drawLine();
    }    
}

function calculateAndShowTotalDistanceOfHistoryData() {
    var i = 0;
    var totalDistance = 0;
    if(locationsHistory) {
        while(i + 1  < locationsHistory.length) {
            totalDistance += distance(locationsHistory[i].lat, locationsHistory[i].lng, locationsHistory[i+1].lat, locationsHistory[i+1].lng)
            i++;
        }
        document.getElementById("kmdistance").innerHTML = "Komplette Distanz in Meter: " + totalDistance;
    }
    else {
        alert("Es gibt aktuell keine Location History!");
    }
}

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        // Calculate km
        dist = dist * 1.609344;
        dist = dist * 1000;
		
		return dist;
	}
}

function showCurrentPosition() {
    dom_location.innerHTML = "Latitude: " + currentLocation.lat + 
    "<br>Longitude: " + currentLocation.lng;	
    setMarkerAndPosition(currentLocation.lat, currentLocation.lng);
    calculateAndShowTotalDistanceOfHistoryData();
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

