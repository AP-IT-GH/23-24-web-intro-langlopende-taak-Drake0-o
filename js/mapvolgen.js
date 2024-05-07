let map = L.map('otherMap').setView([38.4331211, -79.839835], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Bounds around the Green Bank Telescope
let bounds = [[38.43385, -79.8403], [38.43239, -79.83937]];
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

// Marker with text "Green Bank Telescope"
let gbtMarker = L.marker([38.4331211, -79.839835]).addTo(map);
gbtMarker.bindPopup("<b>Green Bank Telescope</b><br>Coordinates: 38°25′59″N, 79°50′23″W").openPopup();
