class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t| #t stands for table
      t.string :user_name #add a name attribute of type string to the table
      t.string :photo_url #also add a photo_url attribute of type string
      t.string :comment # Body text of comment
      t.timestamps null:true #this will add timestamps for time created and time updated automagically!
    end
    add_reference :comments, :venue
  end
end
