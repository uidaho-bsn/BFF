# Load the rails application
require File.expand_path('../application', __FILE__)

require 'tlsmail'
Net::SMTP.enable_tls(OpenSSL::SSL::VERIFY_NONE)
# Initialize the rails application
Tab::Application.initialize!

ActionMailer::Base.smtp_settings = {
   :address              => "smtp.gmail.com",
   :port                 => 587,
   :domain               => 'bassoonfingeringfindergmail.com',
   :user_name            => 'bassoonfingeringfinder@gmail.com',
   :password             => 'Bassoon11',
   :authentication       => 'plain',
   :enable_starttls_auto => true
}