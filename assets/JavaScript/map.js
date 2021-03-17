
// Initialize and add the map
function initMap() {
    // The location of Urban Chestnut

    var urbanC = { lat: 38.62728056811434, lng: -90.26171550233671 };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: urbanC,
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
      position: urbanC,
      map: map,
    });
  }