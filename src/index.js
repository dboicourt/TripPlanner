console.log("hi");
const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = "pk.eyJ1IjoiZGFybWFzIiwiYSI6ImNqb2dmcDNyazBlajEzd3F2djAzOTcwZmsifQ.vkEe-Ewb5-V2gZRKkjkTmA";

// const map = new mapboxgl.Map({
//     container: "map",
//     center: [35.272, -120.740], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//     zoom: 12, // starting zoom
//     style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
//    });


// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([35.272, -120.740]).addTo(map);

// const mapboxgl = require("mapbox-gl");

// mapboxgl.accessToken = "pk.eyJ1IjoiY2Fzc2lvemVuIi...A4dGQyNnN1ZifQ.0ZIRDup0jnyUFVzUa_5d1g";
const map = new mapboxgl.Map({
  container: "map",
  center: [35.272, -120.740], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([35.272, -120.740]).addTo(map);