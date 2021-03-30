function initMap() {
    // The location of Uluru
    var uluru = {lat: 37.63810244424352, lng: 127.02682927646147};

    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: uluru});
  
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
}