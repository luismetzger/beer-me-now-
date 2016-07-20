class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t| #t stands for table
      t.string :name # Name of venue
      t.string :primary_category
      t.string :venue_icon_url
      t.string :venue_address
      t.string :venue_city
      t.string :venue_state
      t.string :venue_country
      t.string :lat
      t.string :lng
      t.string :twitter_handle
      t.string :facebook_url
      t.string :instragram_url
      t.string :venue_url
      t.string :photo_url
      t.timestamps null:true #this will add timestamps for time created and time updated automagically!
    end
  end
end
