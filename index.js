const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11", // Replace with your preferred style URL
  center: [YOUR_LONGITUDE, YOUR_LATITUDE], // Replace with your desired center coordinates
  zoom: YOUR_ZOOM_LEVEL, // Replace with your desired zoom level
});

// Add any additional map customization here, like markers, popups, etc.
// Refer to Mapbox documentation for more options.
