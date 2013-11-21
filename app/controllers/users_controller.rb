class UsersController < ApplicationController
  before_filter :require_login, :only => [:change_password, :destroy, :index, :logout, :show, :edit, :update]
  before_filter :require_admin, :only => :index

  def index
    @users = User.all

    respond_to do |format|
      format.html
      if current_user.isAdmin
         format.json { render json: @users }
      end
    end
  end

  def new
    @user = User.new(params[:user])
  end

  def create
    @user = User.new(params[:user])

    if request.post?
      if @user.save
        if @user.id == 1
          @user.admin = true
        else
          @user.admin = false
        end
        
        session[:user] = User.authenticate(@user.login, @user.password)
        begin
          @user.send_welcome # welcome email
        rescue => exception
          exception = "Invalid email"
        end
       
        if exception
          redirect_to root_url, :notice => "The email you entered doesn't seem to be a real email. You can change your email in the User Profile."
        else
          redirect_to root_url, :notice => "Registration Successful"
        end
        
      else
        redirect_to root_url + 'users/register', :notice => "Registration Unsuccessful"
      end
    end
  end

  def login
    if request.post?
      if session[:user] = User.authenticate(params[:user][:login], params[:user][:password])
        redirect_to root_url, :notice => "Logged In"
      else
        redirect_to root_url, :notice => "Login Failed"
      end
    end
  end

  def logout
    session[:user] = nil
    redirect_to root_url, :notice => "Logged Out"
  end

  def forgot_password
    if request.post?
      usr = User.find_by_email(params[:user][:email])
      
      if usr
      	usr.send_new_password 
        redirect_to root_url, :notice => "A new password has been sent to your email."
      else
        flash.now[:notice] = "Email was not found. Are you sure you entered your correct email?"
      end
    end
  end

  def show
    @user = User.find(params[:id])
    
    respond_to do |format|
      if @user != current_user and !current_user.admin
        format.html { redirect_to user_path(current_user) }
      else
        format.html { }
        if current_user.isAdmin
          format.json { render json: @user }
        end
      end
    end
  end
  
  def edit
    @user = User.find(params[:id])
    
    respond_to do |format|
      if @user != current_user and !current_user.admin
        format.html { redirect_to user_path(@current_user) }
      else
        format.html { }
        if current_user.isAdmin
          format.json { redner json: @user }
        end
      end
    end
  end
  
  def update
    @user = User.find(params[:id])
    
    if current_user == @user
      @user.password = params[:user][:password]
    end

    if @user.update_attribute(:email, params[:user][:email]) and @user.update_attribute(:skill, params[:user][:skill]) and 
      @user.update_attribute(:time_zone, params[:user][:time_zone])
        redirect_to @user, :notice => "Profile Updated."
    else
      redirect_to edit_user_path(@user), :notice => "Updated Failed"
    end
  end

  def check_email
    @user = User.find_by_email(params[:user][:email])
    
    respond_to do |format|
      format.json { render :json => !@user }
    end
  end
  
  def not_check_email
    @user = User.find_by_email(params[:user][:email])
    
    respond_to do |format|
      format.json { render :json => @user }
    end
  end
  
  def check_login
    @user = User.find_by_login(params[:user][:login])
    
    respond_to do |format|
      if params[:user][:login] == "Username"
        format.json { render :json => false }
      else
        format.json { render :json => !@user }
      end
    end
  end
  
  def make_admin
    @user = User.find(params[:id])
    
    make_admin = !@user.admin
    
    if @user.update_attribute(:admin, make_admin)
      redirect_to edit_user_path(@user), notice: "User admin status was changed."
    else
      redirect_to edit_user_path(@user), notice: "User admin status was not changed."
    end
  end
  
  def destroy
    @user = User.find(params[:id])
    
    respond_to do |format|
      if @user == current_user
  	    session[:user] = nil
        @user.destroy

        redirect_to root_url, :notice => "User \"" + @user.login + "\" Deleted" and return
      else
        @user.destroy

        redirect_to root_url + "users/" , :notice => "User \"" + @user.login + "\" Deleted" and return
      end
    end
  end
end
