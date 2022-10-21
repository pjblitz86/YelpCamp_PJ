mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 8
});

new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);
