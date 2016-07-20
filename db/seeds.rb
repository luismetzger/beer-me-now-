# Models
require './models/comment'
require './models/venue'


 Comment.create({
   user_name: "John Denver",
   photo_url: "http://cdn.quotationof.com/images/john-denver-1.jpg",
   comment: "I flew Mountain High with my favorite beer Airplane Ale"
  })

  Venue.create({
    name: "Test Brewing Co.",
    primary_category: "Micro Brewery",
    venue_icon_url: "http://daysinth.spicreative.net/media/uploads/img/icon-jollymill.png",
    venue_address: "1234 Awesome St.",
    venue_city: "Denver",
    venue_state: "CO",
    venue_country: "USA",
    lat: "39.763139",
    lng: "-105.000404",
    twitter_handle: "https://twitter.com",
    facebook_url: "https://www.facebook.com",
    instragram_url: "https://www.instagram.com",
    venue_url: "https://untappd.com",
    photo_url: "http://www.thebrewery.nyc/wp-content/uploads/2014/05/brewery_main_page-copy2.jpg"
   })
