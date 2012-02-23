require 'test_helper'

class FiNosControllerTest < ActionController::TestCase
  setup do
    @fi_no = fi_nos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:fi_nos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create fi_no" do
    assert_difference('FiNo.count') do
      post :create, fi_no: @fi_no.attributes
    end

    assert_redirected_to fi_no_path(assigns(:fi_no))
  end

  test "should show fi_no" do
    get :show, id: @fi_no
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @fi_no
    assert_response :success
  end

  test "should update fi_no" do
    put :update, id: @fi_no, fi_no: @fi_no.attributes
    assert_redirected_to fi_no_path(assigns(:fi_no))
  end

  test "should destroy fi_no" do
    assert_difference('FiNo.count', -1) do
      delete :destroy, id: @fi_no
    end

    assert_redirected_to fi_nos_path
  end
end
