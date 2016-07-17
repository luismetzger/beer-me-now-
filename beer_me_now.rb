class BeerMeNow < Sinatra::Base
    #index page
    get '/' do

        erb :index
    end
end
