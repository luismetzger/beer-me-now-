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


     //Carousel Animation
     jQuery('.carousel[data-type="multi"] .item').each(function(){
  		var next = jQuery(this).next();
  		if (!next.length) {
  			next = jQuery(this).siblings(':first');
  		}
  		next.children(':first-child').clone().appendTo(jQuery(this));

  		for (var i=0;i<2;i++) {
  			next=next.next();
  			if (!next.length) {
  				next = jQuery(this).siblings(':first');
  			}
  			next.children(':first-child').clone().appendTo($(this));
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
