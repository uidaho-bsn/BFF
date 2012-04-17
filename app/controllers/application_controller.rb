class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :prepare_for_mobile
  before_filter :set_user_time_zone

  def current_user
    return User.find(session[:user])
  end
  helper_method :current_user

  def current_session
    return session[:user]
  end
  helper_method :current_session

  def redirect_to_stored
    if return_to = session[:return_to]
      session[:return_to]=nil
      redirect_to_url(return_to)
    else
      redirect_to :controller=>'user', :action=>'welcome'
    end
  end
  
  private
 
  def mobile_device?
    if session[:mobile_param]
      session[:mobile_param] == "1"
    else
      request.user_agent =~ /Mobile|webOS/
    end
  end
  helper_method :mobile_device?

  def set_user_time_zone
    Time.zone = current_user.time_zone if session[:user] != nil
  end
  helper_method :set_user_time_zone

  def prepare_for_mobile
    session[:mobile_param] = params[:mobile] if params[:mobile]
    request.format = :mobile if mobile_device?
  end
  
  def require_login
    unless session[:user] != nil
      redirect_to root_url, :notice => "Login Required!"
    end
  end
  
  def require_admin
    unless current_user.admin
      redirect_to root_url, :notice => "Admin Required"
    end
  end
end
