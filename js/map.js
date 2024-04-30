// Initialiseer de kaart
let map = L.map('map').setView([50.8503, 4.3517], 10); // Coördinaten van Brussel, zoomniveau 10

// Voeg een OpenStreetMap-tilelaag toe aan de kaart
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Voeg een marker toe aan de kaart op de locatie van Satecom HQ
L.marker([50.8503, 4.3517]).addTo(map)
    .bindPopup('Satecom HQ')
    .openPopup();