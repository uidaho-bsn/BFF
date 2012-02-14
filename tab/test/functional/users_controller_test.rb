require 'test_helper'
require 'users_controller'

class UserController; def rescue_action(e) raise e end; end

class UsersControllerTest < ActionController::TestCase
  self.use_instantiated_fixtures  = true

  fixtures :users

  #def setup
  #  @controller = UserController.new
  #  @request    = ActionController::TestRequest.new
  #  @response   = ActionController::TestResponse.new
  #  @request.host = "localhost"
  #end

  def test_auth_bob
    #Check that bob can login.
    post :login, :user => { :login => "bob", :password => "test" }
    assert_not_nil session[:user]
    assert_equal @bob, session[:user]
    assert_response :redirect
    #assert_redirected_to :action => 'welcome'
  end

  def test_register
    #Check that we can register and then login.
    post :register, :user => { :login => "newbob", :password => "newpassword", :password_confirmation => "newpassword", :email => "newbob@mcbob.com" }
    assert_response :redirect
    assert_not_nil session[:user]
    assert_not_nil :user
    #assert_redirected_to :action => 'welcome'
  end

  def test_bad_register
    #Check that we can't register without all the required fields.
    post :register, :user => { :login => "newbob", :password => "newpassword", :password_confirmation => "wrong" , :email => "newbob@mcbob.com"}
    assert_response :success
    #assert_invalid_column_on_record "users", "password"
    assert_template "user/register"
    assert_nil session[:user]

    post :register, :user => { :login => "yo", :password => "newpassword", :password_confirmation => "newpassword" , :email => "newbob@mcbob.com"}
    assert_response :success
    #assert_invalid_column_on_record "user", "login"
    assert_template "user/register"
    assert_nil session[:user]

    post :register, :user => { :login => "yo", :password => "newpassword", :password_confirmation => "wrong" , :email => "newbob@mcbob.com"}
    assert_response :success
    #assert_invalid_column_on_record "user", ["login", "password"]
    assert_template "user/register"
    assert_nil session[:user]
  end

  def test_invalid_login
    #Check that we can't login with an incorrect password.
    post :login, :user=> { :login => "bob", :password => "not_correct" }
    assert_response :success
    assert_nil :user
    assert flash[:warning]
    assert_template "user/login"
  end

  def test_login_logoff
    #Check login.
    post :login, :user=>{ :login => "bob", :password => "test"}
    assert_response :redirect
    assert_not_nil :user
    #Check logoff.
    get :logout
    assert_response :redirect
    assert_nil :user
    assert_redirected_to :action=>'login'
  end

  def test_forgot_password
    #Check that we can login.
    post :login, :user=>{ :login => "bob", :password => "test"}
    assert_response :redirect
    assert_not_nil :user
    #Check that we can logout.
    get :logout
    assert_response :redirect
    assert_nil :user
    #Check that entering an email that doesn't exist doesn't work.
    post :forgot_password, :user => {:email=>"notauser@doesntexist.com"}
    assert_response :success
    assert_session_has_no :user
    assert_template "user/forgot_password"
    assert flash[:warning]
    #Check that entering bobs email works.
    post :forgot_password, :user => {:email=>"exbob@mcbob.com"}   
    assert_response :redirect
    assert flash[:message]
    assert_redirected_to :action=>'login'
  end
=begin
  def test_login_required
    #Check that we can't access welcome if not logged in.
    get :welcome
    assert flash[:warning]
    assert_response :redirect
    assert_redirected_to :action=>'login'
    #Check login.
    post :login, :user=>{ :login => "bob", :password => "test"}
    assert_response :redirect
    assert_session_has :user
    #Check that we can access it now.
    get :welcome
    assert_response :success
    assert flash.empty?
    assert_template "user/welcome"
  end
=end
=begin
  def test_change_password
    #Check that we can login.
    post :login, :user=>{ :login => "bob", :password => "test"}
    assert_response :redirect
    assert_not_nil :user
    #Try to change password.
    #Check that passwords dont match.
    post :change_password, :user=>{ :password => "newpass", :password_confirmation => "newpassdoesntmatch"}
    assert_response :success
    #assert_invalid_column_on_record "user", "password"
    #Check empty password.
    post :change_password, :user=>{ :password => "", :password_confirmation => ""}
    assert_response :success
    #assert_invalid_column_on_record "user", "password"
    #Check correct password & confirmation entered.
    post :change_password, :user=>{ :password => "newpass", :password_confirmation => "newpass"}
    assert_response :success
    assert flash[:message]
    assert_template "user/change_password"
    #Check logout.
    get :logout
    assert_response :redirect
    assert_session_has_no :user
    #Check that the old password no longer works.
    post :login, :user=> { :login => "bob", :password => "test" }
    assert_response :success
    assert_session_has_no :user
    assert flash[:warning]
    assert_template "user/login"
    #Check that the new password works.
    post :login, :user=>{ :login => "bob", :password => "newpass"}
    assert_response :redirect
    assert_session_has :user
  end
=end
=begin
  def test_return_to
    #cant access hidden without being logged in
    get :hidden
    assert flash[:warning]
    assert_response :redirect
    assert_redirected_to :action=>'login'
    assert_session_has :return_to
    #login
    post :login, :user=>{ :login => "bob", :password => "test"}
    assert_response :redirect
    #redirected to hidden instead of default welcome
    assert_redirected_to 'user/hidden'
    assert_session_has_no :return_to
    assert_session_has :user
    assert flash[:message]
    #logout and login again
    get :logout
    assert_session_has_no :user
    post :login, :user=>{ :login => "bob", :password => "test"}
    assert_response :redirect
    #this time we were redirected to welcome
    assert_redirected_to :action=>'welcome'
  end
=end
end
