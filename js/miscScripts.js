// Essentials
function startTracking() {
    $("#mapbox").slideToggle();
}

// Misc
// -----------------------------------

function runEveryHalfMinute() {
    //setInterval(testInterval(), 3000);
    setInterval(testInterval, 3000);
}

var i = 0;
function testInterval() {
    i++;
    document.getElementById("titleTest").innerHTML = "Counter: " + i;
    //alert("Test");
}

