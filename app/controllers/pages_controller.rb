class PagesController < ApplicationController
  def home
    @last_announces = Announce.last(5)
  end
end
