var map = null;
const startLocation = { lat: 48.9748, lng: 8.3113 };
const zoom = 18;

// This function will be called after page has been loaded
$(function() {

    initMap();
    
});

function initMap() {
    // The location
     
    // The map, centered
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoom,
        center: startLocation,
    });
    
    // The marker, positioned
    const marker = new google.maps.Marker({
        position: startLocation,
        map: map,
    });
}

// Update map position and marker
function setMarkerAndPosition(lati, long) {
    const ort = { lat: lati, lng: long };
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoom,
        center: ort,
    });

    const marker = new google.maps.Marker({
        position: ort,
        map: map,
    });

}

// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.
function drawLine() {
    /*
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 0, lng: -180 },
      mapTypeId: "terrain",
    });
    const flightPlanCoordinates = [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ];*/
    
    const flightPath = new google.maps.Polyline({
      path: locationsHistory,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    flightPath.setMap(map);
    //alert("Line has been drawn");
  }