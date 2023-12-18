


mapboxgl.accessToken = 'pk.eyJ1IjoiZGlzYXN0ZXItc29sdXRpb25zLWljZWRzIiwiYSI6ImNsbzF6ODJyZDAyc2IybG1vaWpqMmk4ZzYifQ.PyFspG6GzL4H4P4Daja4ag';
const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/disaster-solutions-iceds/clo2lgt83003m01rc2mdxb935', // style URL
center: [139.835,-26.944], // starting position [lng, lat]
zoom: 4.5 // starting zoom
});

map.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: ['temp-nbs-locations'] // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];
      
      
      /* 
      Create a popup, specify its options 
      and properties, and add it to the map.
    */
    const popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      // Specifing the HTML that will make the popup
      .setHTML(
      `<a href = "location-page/${feature.properties.filename}.html">
      <h3>${feature.properties.location}</h3></a>
      <p>${feature.properties.projectPartner}</p>
      <a href = "location-page/${feature.properties.filename}.html" style="text-align: center;">
      Click Here</a>`
        )
        .addTo(map);
    
    });