class AnnouncesController < ApplicationController
  def index
    @announces = Announce.all
    
  end

  def new
    @announce = Announce.new
  end

  def create
  end

  def show
  end

  def destroy
  end
end
