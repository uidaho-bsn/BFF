class UsersController < ApplicationController
 
  before_filter :login_required, :only => ['welcome', 'change_password', 'hidden']

  def index
    @users = User.all
  end

  def register
    @user = User.new(params[:user])
    if request.post?  
      if @user.save
        session[:user] = User.authenticate(@user.login, @user.password)
        flash[:message] = "Registration Successful"
        redirect_to :action => 'login'         
      else
        flash[:warning] = "Registration Unsuccessful"
      end
    end
  end

  def login
    if request.post?
      if session[:user] = User.authenticate(params[:user][:login], params[:user][:password])
        flash[:notice] = "Loged In"
        redirect_to root_url
      else
        flash[:warning] = "Login Failed"
      end
    end
  end

  def logout
    session[:user] = nil
    flash[:message] = "Logged Out"
    redirect_to :action => 'login'
  end

  def forgot_password
    if request.post?
      usr = User.find_by_email(params[:user][:email])
      if usr and usr.send_new_password
        flash[:message] = "A new password has been sent to your email."
        redirect_to :action=>'login'
      else
        flash[:warning] = "Couldn't send new password"
      end
    end
  end

  def change_password
    @user = session[:user]
    if request.post?
      @user.update_attributes(:password=>params[:user][:password], :password_confirmation => params[:user][:password_confirmation])
      if @user.save
        flash[:message] = "Password Changed"
      end
    end
  end

  def welcome
  end
  
  def hidden
  end
end
