class Announce < ApplicationRecord
  mount_uploader :picture, PictureUploader

  geocoded_by :address
  after_validation :geocode, :if => :address_changed?
end
