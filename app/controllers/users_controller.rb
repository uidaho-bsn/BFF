class UsersController < ApplicationController
  before_filter :login_required, :only => ['change_password', 'hidden', 'destroy']

  def index
    @users = User.all
  end

  def new
    @user = User.new(params[:user])
=begin
    if request.post?  
      if @user.save
        if @users <= 1
          user.admin = true
        end
        session[:user] = User.authenticate(@user.login, @user.password)
        flash[:message] = "Registration Successful"
        redirect_to root_url       
      else
        flash[:warning] = "Registration Unsuccessful"
      end
    end
=end
  end

  def create
    @user = User.new(params[:user])
    @user.admin = false
    if request.post?  
      if @user.save
        session[:user] = User.authenticate(@user.login, @user.password)
        flash[:message] = "Registration Successful"
        redirect_to root_url         
      else
        flash[:warning] = "Registration Unsuccessful"
      end
    end
  end

  def login
    if request.post?
      if session[:user] = User.authenticate(params[:user][:login], params[:user][:password])
      flash[:notice] = "Logged In"
      redirect_to root_url
      else
        flash[:warning] = "Login Failed"
        redirect_to root_url
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
      debugger
      usr = User.find_by_email(params[:user][:email])
      usr.send_new_password if usr
      if ActionMailer::Base.deliveries.empty? 
        flash[:notice] = "ruh roh"
      end
      #flash[:notice] = "A new password has been sent to your email."
      redirect_to root_url, :notice => "A new password has been sent to your email."
      else
        flash[:warning] = "Couldn't send new password"
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
  
  def set_admin(curr_user)
    curr_user.admin = true
  end
  helper_method :set_admin
  
  def rm_admin(curr_user)
    curr_user.admin = false
  end
  helper_method :rm_admin
  
  def set_id(new_id)
    #session[:id] = new_id.id
    return new_id
  end
  helper_method :set_id
  
  def show
    @user = session[:id]
  end
  
  def edit
    #@user = 
  end
  
  def destroy 
  end
  
  def hidden
  end
end
