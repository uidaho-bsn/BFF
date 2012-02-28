class UsersController < ApplicationController
 
  before_filter :login_required, :only => ['show', 'change_password', 'hidden', 'destroy']

  def index
    @users = User.all
  end

  def new
    @user = User.new(params[:user])
    if request.post?  
      if @user.save
        session[:user] = User.authenticate(@user.login, @user.password)
        flash[:message] = "Registration Successful"
        redirect_to :action => :index         
      else
        flash[:warning] = "Registration Unsuccessful"
      end
    end
  end

  def create
    @user = User.new(params[:user])
    if request.post?  
      if @user.save
        session[:user] = User.authenticate(@user.login, @user.password)
        flash[:message] = "Registration Successful"
        redirect_to :action => :index         
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
    redirect_to root_url
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
  
  def show
  end
  
  def destroy 
  end
  
  def hidden
  end
end
