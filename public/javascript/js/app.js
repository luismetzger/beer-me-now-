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


//Mapbox Homepage
mapboxgl.accessToken = 'pk.eyJ1IjoibHVpc21ldHpnZXIiLCJhIjoiTEo4Q1cxZyJ9.XXeAeC7Hhe2GqDIRWfi_Cw';
var map = new mapboxgl.Map({
    container: 'home_map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 13,
    center: [-104.990251, 39.739236]
});

map.on('load', function() {
    map.addSource('points', {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-105.007613, 39.757755]
                },
                "properties": {
                    "title": "General Assembly",
                    "icon": "beer"
                }
            }]
        }
    });
    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": "points",
        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
});

map.scrollZoom.disable();
