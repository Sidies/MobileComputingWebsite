function debug_addLocationHistoryAndDrawLine() {
    
    var longitude = parseFloat(document.getElementById('longitudeBox').value);
    var latitude = parseFloat(document.getElementById('latitudeBox').value);

    locationToAdd = {lat: latitude, lng: longitude};
    locationsHistory.push(locationToAdd);

    drawLine();

}