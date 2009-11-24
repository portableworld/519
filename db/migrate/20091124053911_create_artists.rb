class CreateArtists < ActiveRecord::Migration
  def self.up
    create_table :artists do |t|
      t.string :name
      t.string :genre
      t.text :bio
      t.string :link
      t.string :album_cover
      t.text :discography
      t.string :blurb

      t.timestamps
    end
  end

  def self.down
    drop_table :artists
  end
end
