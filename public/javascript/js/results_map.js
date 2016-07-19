// Google Maps
function initMap() {
  // Specify features and elements to define styles.
  var styleArray = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6195a0"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"0"},{"color":"#f5f5f2"},{"gamma":"1"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"-3"},{"gamma":"1.00"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5ce"},{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fac9a9"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#787878"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.airport","elementType":"labels.icon","stylers":[{"hue":"#0a00ff"},{"saturation":"-77"},{"gamma":"0.57"},{"lightness":"0"}]},{"featureType":"transit.station.rail","elementType":"labels.text.fill","stylers":[{"color":"#43321e"}]},{"featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"hue":"#ff6c00"},{"lightness":"4"},{"gamma":"0.75"},{"saturation":"-68"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#eaf6f8"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c7eced"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-49"},{"saturation":"-53"},{"gamma":"0.79"}]}];

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map2'), {
    center: {lat: 39.757755, lng: -105.007613},
    scrollwheel: false,
    styles: styleArray,
    zoom: 16
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here :)');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        // Create a marker and set its position.
          var marker = new google.maps.Marker({
            map: map,
            position: {lat: 39.757755, lng: -105.007613},
            title: 'Hello World!'
          });



          //google map custom marker icon - .png fallback for IE11
          var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
          var marker_url = ( is_internetExplorer11 ) ? 'https://codyhouse.co/demo/custom-google-map/img/cd-icon-location.png' : 'https://codyhouse.co/demo/custom-google-map/img/cd-icon-location.svg';

          //define the basic color of your map, plus a value for saturation and brightness
          var	main_color = '#2d313f',
            saturation_value= -20,
            brightness_value= 5;

          //we define here the style of the map
          var style= [
            {
              //set saturation for the labels on the map
              elementType: "labels",
              stylers: [
                {saturation: saturation_value}
              ]
            },
              {	//poi stands for point of interest - don't show these lables on the map
              featureType: "poi",
              elementType: "labels",
              stylers: [
                {visibility: "off"}
              ]
            },
            {
              //don't show highways lables on the map
                  featureType: 'road.highway',
                  elementType: 'labels',
                  stylers: [
                      {visibility: "off"}
                  ]
              },
            {
              //don't show local road lables on the map
              featureType: "road.local",
              elementType: "labels.icon",
              stylers: [
                {visibility: "off"}
              ]
            },
            {
              //don't show arterial road lables on the map
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [
                {visibility: "off"}
              ]
            },
            {
              //don't show road lables on the map
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [
                {visibility: "off"}
              ]
            },
            //style different elements on the map
            {
              featureType: "transit",
              elementType: "geometry.fill",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            },
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            },
            {
              featureType: "poi.government",
              elementType: "geometry.fill",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            },
            {
              featureType: "poi.sport_complex",
              elementType: "geometry.fill",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            },
            {
              featureType: "poi.attraction",
              elementType: "geometry.fill",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            },
            {
              featureType: "poi.business",
              elementType: "geometry.fill",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            },
            {
              featureType: "transit",
              elementType: "geometry.fill",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            },
            {
              featureType: "transit.station",
              elementType: "geometry.fill",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            },
            {
              featureType: "landscape",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]

            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                { hue: main_color },
                { visibility: "on" },
                { lightness: brightness_value },
                { saturation: saturation_value }
              ]
            }
          ];


          //Google Map Venue location
          //set your google maps parameters
           var latitude = 39.757755,
               longitude = -105.007613,
                map_zoom = 14;

           //set google map options
           var map_options = {
                 center: new google.maps.LatLng(latitude, longitude),
                 zoom: map_zoom,
                 panControl: false,
                 zoomControl: false,
                 mapTypeControl: false,
                 streetViewControl: false,
                 mapTypeId: google.maps.MapTypeId.ROADMAP,
                 scrollwheel: false,
                 styles: style
             }
             //inizialize the map
           var map_venue = new google.maps.Map(document.getElementById('map3'), map_options);
           //add a custom marker to the map
           var marker = new google.maps.Marker({
               position: new google.maps.LatLng(latitude, longitude),
               map: map,
               visible: true,
               icon: marker_url
           });

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

window.onload = function(){
  initMap();
};
