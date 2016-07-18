class BeerMeNow < Sinatra::Base
    #index page
    get '/' do

        erb :index
    end

    #GET - Results page all
    get '/results' do

        erb :results
    end

    #POST - User fills out form on index page to get to results
end
