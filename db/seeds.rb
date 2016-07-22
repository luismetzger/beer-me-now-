# Models
require './models/comment'
require './models/venue'
require 'faraday'
require 'json'

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


  @client_id = "B2F126EF24E190EFCA67322BB0123B87F3D0E64C"
  @client_secret = "D01961E3F9AFA48C576E6BD280FF95A446DFCDDC"
  @conn = Faraday.new(url: 'https://api.untappd.com/v4')

   def add_untapped_to_db(venue_key)
     json_response = @conn.get("venue/info/#{venue_key}?client_id=#{@client_id}&client_secret=#{@client_secret}")
     @venue_data = JSON.parse json_response.body

     db_hash = {}
     db_hash[:name] = @venue_data['response']['venue']['venue_name']
     db_hash[:primary_category] = @venue_data['response']['venue']['primary_category']
     db_hash[:venue_icon_url] = @venue_data['response']['venue']['venue_icon']['lg']
     db_hash[:venue_address] = @venue_data['response']['venue']['location']['venue_address']
     db_hash[:venue_city] = @venue_data['response']['venue']['location']['venue_city']
     db_hash[:venue_state] = @venue_data['response']['venue']['location']['venue_state']
     db_hash[:venue_country] = @venue_data['response']['venue']['location']['venue_country']
     db_hash[:venue_country] = @venue_data['response']['venue']['location']['venue_country']
     db_hash[:lat] = @venue_data['response']['venue']['location']['lat']
     db_hash[:lng] = @venue_data['response']['venue']['location']['lng']
     db_hash[:twitter_handle] = @venue_data['response']['venue']['contact']['twitter']
     db_hash[:facebook_url] = @venue_data['response']['venue']['contact']['facebook']
    # db_hash[:instragram_url] = @venue_data['response']['venue']['checkins']['items'].first['brewery']['contact']['instagram']
     db_hash[:venue_url] = @venue_data['response']['venue']['contact']['venue_url']
    #  if !@venue_data['response']['venue']['media']['items'].empty?
    #    db_hash[:photo_url] = @venue_data['response']['venue']['media']['items'].first['photo']['photo_img_lg']
    #  else
    #    p db_hash[:name]
     #
    #  end

     Venue.create(db_hash)
   end

add_untapped_to_db(82412)
add_untapped_to_db(79)
add_untapped_to_db(2059903)
add_untapped_to_db(3231622)
add_untapped_to_db(3286761)
add_untapped_to_db(2763056)
add_untapped_to_db(13131)
add_untapped_to_db(5499)
add_untapped_to_db(63407)
add_untapped_to_db(3330252)
add_untapped_to_db(2059903)
add_untapped_to_db(4563914)
add_untapped_to_db(46823)
add_untapped_to_db(1282)
add_untapped_to_db(391324)
add_untapped_to_db(1783725)
add_untapped_to_db(2168803)
add_untapped_to_db(385698)
add_untapped_to_db(11571)
add_untapped_to_db(229282)
