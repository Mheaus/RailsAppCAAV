# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Announce.destroy_all

if Announce.all.length == 0
  puts "database empty"
else
  puts "error when trying to destroy db"
end

url = [
  "http://res.cloudinary.com/mathieuadbrt/image/upload/v1521117976/CAAV/placeholder1.png",
  "http://res.cloudinary.com/mathieuadbrt/image/upload/v1521117976/CAAV/placeholder2.png",
  "http://res.cloudinary.com/mathieuadbrt/image/upload/v1521117976/CAAV/placeholder3.png"
]

announces = [
  {title: "Stand de Fruits", description: "8m de Stand tout equipé - Vente de fruits et légumes - pour couple - rak aluminium", address: "Mérignac, 33"},
  {title: "Café - Chocolat", description: "Vente de Café - Thé- Chocolat - Café en Grain , moulu , dosette - Stand entièrement equipé: Parasol,table...", address: "Bordeaux, 33"},
  {title: "Olives et Condiments", description: "Sur Vendays Montalivet - Vente d'olives et condiments et fruits secs - Stand en dur ouvert 6jrs /7jrs", address: "Vendays Montalivet"}
]

announces.each_with_index do |announce, i|
  announce = Announce.new(announce)
  announce.remote_picture_url = url[i-1]
  announce.save!
end

puts "successfully created #{Announce.all.length} announces"
