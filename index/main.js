function dropdown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});
var bounds = [[0,0], [2200,3400]]
var image = L.imageOverlay('../floor_plans/SW01_F3.png', bounds).addTo(map)
map.fitBounds(bounds)

var marker = L.marker([900,2200]).bindPopup('Ethernet Port:<br>3350 A').addTo(map)

function onMapClick(e) {
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
}

map.on('click', onMapClick);
