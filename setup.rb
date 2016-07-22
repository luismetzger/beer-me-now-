require 'httparty'

class VenueDB
  include HTTParty
  format :json



  def self.setup
    @venue_db = get('https://api.untappd.com/v4/venue/info/82412?client_id=B2F126EF24E190EFCA67322BB0123B87F3D0E64C&client_secret=D01961E3F9AFA48C576E6BD280FF95A446DFCDDC')
  end

end

puts VenueDB.setup.inspect
