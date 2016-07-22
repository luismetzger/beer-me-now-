class BeerMeNow < Sinatra::Base

  set :method_override, true

  # RESTful Comments Controller Actions
  #GET - index
  get '/venue/:id' do
    @venue = Venue.find(params[:id])
    
    erb :venue
  end

end
