class HomeController < ApplicationController
  def index
  end
  
  def mobile_request?
    request.subdomains.first == 'm'
  end
  helper_method :modbile_request?
end
