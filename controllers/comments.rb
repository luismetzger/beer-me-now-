class BeerMeNow < Sinatra::Base

  set :method_override, true

  # RESTful Comments Controller Actions
  #index
  get '/venue/:id' do
    @venue = Venue.find(params[:id])
    @comments = Comment.all
    @comments.each do |i|
      p i.created_at
    end

    p "This is working"
    p @comments
    erb :venue
  end

  #Post a new comment
  post '/venue/:id/comment/new' do

    @new_comment = Comment.new({:comment => params[:comment_body], :photo_url => "http://www.escience.upm.edu.my/images/FS/biology/Default_User.png"})

    if @new_comment.save
      redirect to "/venue/#{params[:id]}"
      puts @new_comment
    else
      puts 'Not working'
    end
  end

end
