class BeerMeNow < Sinatra::Base
  require = 'json'

  set :method_override, true

  # RESTful Comments Controller Actions
  #GET - index
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

  #POST - a new comment
  post '/venue/:id/comment/new' do

    @new_comment = Comment.new({:comment => params[:comment_body], :photo_url => "http://www.escience.upm.edu.my/images/FS/biology/Default_User.png"})

    if @new_comment.save
      redirect to "/venue/#{params[:id]}"
      puts @new_comment
    else
      puts 'Post not working'
    end
  end

  put '/comment/:id' do
    @update_comment = Comment.find(params[:id])
    @update_comment.comment = params['value']
    # p params
    if @update_comment.save
      puts @update_comment
    else
      puts 'Not working'
    end


  end

  #DELETE - comment
  delete '/venue/:id/comment/:dc/delete' do

    @find_comment = Comment.find(params[:dc])

    if @find_comment.destroy
      p 'comment was deleted'
      redirect to "/venue/#{params[:id]}"
    else
      puts 'Delete not working'
    end
  end

end
