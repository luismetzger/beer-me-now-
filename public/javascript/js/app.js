'use strict'

$(document).ready(function() {
 console.log('everything is working with jquery');

 //////Page load//////
  $("body").css("display", "none");
  $("body").fadeIn(1500);
  $("a.transition").click(function(event){
    "use strict";
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);
  });
  function redirectPage() {
    "use strict";
    window.location = linkLocation;
  }

  //Menu Toggle Script
   $("#menu-toggle").click(function(e) {
       e.preventDefault();
       $("#wrapper").toggleClass("toggled");
   });

 //Fixed overlay for Homepage
 var docHeight = $(document).height();

   $(".awesome_map_bg").append("<div id='overlay'></div>");

   $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.6,
         'position': 'absolute',
         'top': 0,
         'left': 0,
         'background-color': '#2c3e50',
         'width': '100%',
         'height': '100%',
         'z-index': 1
      });

      //Search animation
      $('.field').on('focus', function() {
       $('body').addClass('is-focus');
       $('#overlay').addClass('is-focus');
     });

     $('.field').on('blur', function() {
       $('body').removeClass('is-focus is-type');
       $('#overlay').removeClass('is-focus is-type');
     });

     $('.field').on('keydown', function(event) {
       $('body').addClass('is-type');
       if((event.which === 8) && $(this).val() === '') {
         $('body').removeClass('is-type');
       }
     });
});


//Mapbox Homepage - Index
const access_token = 'pk.eyJ1IjoibHVpc21ldHpnZXIiLCJhIjoiTEo4Q1cxZyJ9.XXeAeC7Hhe2GqDIRWfi_Cw';
mapboxgl.accessToken = access_token;


var map = new mapboxgl.Map({
    container: 'home_map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 13,
    center: [-104.990251, 39.739236]
});

// var map2 = new mapboxgl.Map({
//   container: 'map2',
//   style: 'mapbox://styles/mapbox/streets-v9',
//   zoom: 13,
//   center: [-104.990251, 39.739236]
// });
// console.log(map);
// console.log(map2);


// map.on('load', function() {
//     map.addSource('points', {
//         "type": "geojson",
//         "data": {
//             "type": "FeatureCollection",
//             "features": [{
//                 "type": "Feature",
//                 "geometry": {
//                     "type": "Point",
//                     "coordinates": [-105.007613, 39.757755]
//                 },
//                 "properties": {
//                     "title": "General Assembly",
//                     "icon": "beer"
//                 }
//             }]
//         }
//     });
//     map.addLayer({
//         "id": "points",
//         "type": "symbol",
//         "source": "points",
//         "layout": {
//             "icon-image": "{icon}-15",
//             "text-field": "{title}",
//             "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
//             "text-offset": [0, 0.6],
//             "text-anchor": "top"
//         }
//     });
// });

// map2.scrollZoom.disable();


//Mapbox Results Page - GET index all Results
// var geojson = [
//   {
//     "type": "Feature",
//     "geometry": {
//       "type": "Point",
//       "coordinates": [-105.007613, 39.757755]
//     },
//     "properties": {
//       "marker-color": "#3ca0d3",
//       "marker-size": "large",
//       "marker-symbol": "beer"
//     }
//   },
//   {
//     "type": "Feature",
//     "geometry": {
//       "type": "Point",
//       "coordinates": [-105.122606, 39.615289]
//     },
//     "properties": {
//       "marker-color": "#63b6e5",
//       "marker-size": "large",
//       "marker-symbol": "beer"
//     }
//   }
// ];

// mapSimple.scrollWheelZoom.disable();


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

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

initMap();
