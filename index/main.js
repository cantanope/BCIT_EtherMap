function dropdown() {
    var x = document.getElementById("maintTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


window.addEventListener("hashchange", (e) => {
  loadMap(window.location.hash.substring(1))
})

var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -5,
  maxZoom: 1
});
var bounds = [[0,0], [3000,3000]]

function loadMap(mapLocation) {
  // remove image layer if it already exists
  if (map.hasLayer(map)) {
      map.removeLayer(map);
      var image = L.imageOverlay(`../floor_plans/${mapLocation}.jpg`, bounds).addTo(map)
  } else {
      var image = L.imageOverlay(`../floor_plans/${mapLocation}.jpg`, bounds).addTo(map)
  }  
  map.fitBounds(bounds)
}

var iconConfig = L.icon({
  iconUrl: 'icons/ethernet_port.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
})

// var marker = L.marker([900,2200], {icon: iconConfig}).bindPopup('Ethernet Port:<br>3350 A').addTo(map)

