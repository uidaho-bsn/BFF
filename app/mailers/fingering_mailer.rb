class FingeringMailer < ActionMailer::Base
default :from => "from@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.password_reset.subject
  #

  def fingering_submitted_email(fingering, admin)
    @fingering = fingering
    mail(:to => admin.email, :subject => "Fingering Submitted for Approval", :from  => 'bassoonfingeringfinder@gmail.com') 
  end

end
