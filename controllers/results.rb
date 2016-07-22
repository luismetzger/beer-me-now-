class BeerMeNow < Sinatra::Base

  

  set :method_override, true

  # RESTful Comments Controller Actions
  #GET - index
  get '/results' do
    @venues = Venue.all

    p @venues

    erb :results
  end

end
