class BeerMeNow < Sinatra::Base
    #index page
    get '/' do

        erb :index
    end

    #GET - Results page all
    # get '/results' do
    #
    #     erb :results
    # end

    #POST - User fills out form on index page to get to results
    # post '/results' do
    #
    #     erb :results
    # end

    #GET - :id of individiual venue location details
    # get '/results/:id' do
    #
    #     erb :venue
    # end

end
