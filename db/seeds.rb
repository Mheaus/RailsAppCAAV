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
  "http://res.cloudinary.com/mathieuadbrt/image/upload/v1521117976/CAAV/placeholder3.png",
  "http://res.cloudinary.com/mathieuadbrt/image/upload/v1521117976/CAAV/placeholder1.png",
  "http://res.cloudinary.com/mathieuadbrt/image/upload/v1521117976/CAAV/placeholder2.png",
  "http://res.cloudinary.com/mathieuadbrt/image/upload/v1521117976/CAAV/placeholder3.png"
]

announces = [
  {title: "Stand de Fruits", description: "8m de Stand tout equipé - Vente de fruits et légumes - pour couple - rak aluminium", address: "Mérignac, 33"},
  {title: "Café - Chocolat", description: "Vente de Café - Thé- Chocolat - Café en Grain , moulu , dosette - Stand entièrement equipé: Parasol,table...", address: "Bordeaux, 33"},
  {title: "Olives et Condiments", description: "Sur Vendays Montalivet - Vente d'olives et condiments et fruits secs - Stand en dur ouvert 6jrs /7jrs", address: "Vendays Montalivet"},
  {title: "Stand de Patates", description: "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.", address: "Talence, 33"},
  {title: "Stand de Cacahuètes", description: "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.", address: "Bruges, 33"},
  {title: "Stand de Lipsum", description: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.", address: "Mérignac, 33"}
]

announces.each_with_index do |announce, i|
  announce = Announce.new(announce)
  announce.remote_picture_url = url[i-1]
  announce.save!
end

puts "successfully created #{Announce.all.length} announces"
