class AddLatitudeAndLongitudeToAnnounces < ActiveRecord::Migration[5.1]
  def change
    add_column :announces, :latitude, :float
    add_column :announces, :longitude, :float
  end
end
