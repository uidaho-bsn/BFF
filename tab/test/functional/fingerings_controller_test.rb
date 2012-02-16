require 'test_helper'

class FingeringsControllerTest < ActionController::TestCase
  setup do
    @fingering = fingerings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:fingerings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create fingering" do
    assert_difference('Fingering.count') do
      post :create, fingering: @fingering.attributes
    end

    assert_redirected_to fingering_path(assigns(:fingering))
  end

  test "should show fingering" do
    get :show, id: @fingering
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @fingering
    assert_response :success
  end

  test "should update fingering" do
    put :update, id: @fingering, fingering: @fingering.attributes
    assert_redirected_to fingering_path(assigns(:fingering))
  end

  test "should destroy fingering" do
    assert_difference('Fingering.count', -1) do
      delete :destroy, id: @fingering
    end

    assert_redirected_to fingerings_path
  end
end
