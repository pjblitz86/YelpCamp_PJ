mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 8
});

new mapboxgl.Marker()
  .setLngLat([23.903597, 54.898521])
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${campground.title}</h3><p>${campground.location}</p>`)
  )
  .addTo(map);
