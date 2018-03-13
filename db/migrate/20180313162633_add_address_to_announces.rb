class AddAddressToAnnounces < ActiveRecord::Migration[5.1]
  def change
    add_column :announces, :address, :string
  end
end
