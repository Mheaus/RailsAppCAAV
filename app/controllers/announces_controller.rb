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

  private

  def announces_params
    params.require(:announce).permit(:title, :description, :picture, :address, :latitude, :longitude)
  end
end
