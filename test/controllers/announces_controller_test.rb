require 'test_helper'

class AnnouncesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get announces_index_url
    assert_response :success
  end

  test "should get create" do
    get announces_create_url
    assert_response :success
  end

  test "should get show" do
    get announces_show_url
    assert_response :success
  end

  test "should get destroy" do
    get announces_destroy_url
    assert_response :success
  end

end
