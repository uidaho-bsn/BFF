# Load the rails application
require File.expand_path('../application', __FILE__)

require 'tlsmail'
# Initialize the rails application
Tab::Application.initialize!

#ActionMailer::Base.smtp_settings = {
#   :enable_starttls_auto => true,
#   :address              => "smtp.gmail.com",
#   :port                 => 587,
#   :domain               => 'bassoonfingeringfindergmail.com',
#   :user_name            => '<bassoonfingeringfinder@gmail.com>',
#   :password             => '<Bassoon11>',
#   :authentication       => :plain
#}