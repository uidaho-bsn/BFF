require 'digest/sha1'

class User < ActiveRecord::Base
  validates_length_of       :login, :within => 3..64
  validates_length_of       :password, :within => 6..64
  validates_presence_of     :login, :email, :email_confirmation, :password, :password_confirmation, :salt, :skill
  validates_uniqueness_of   :login, :email
  validates_confirmation_of :password, :email
  validates_format_of       :email, :with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, :message => "Invalid Email"

  attr_accessor :password, :password_confirmation
  attr_accessible :email, :email_confirmation, :admin, :skill, :time_zone
  attr_protected :id, :salt
  
  def self.authenticate(login, pass)
    usr = find(:first, :conditions=>["login = ?", login])
    return nil if usr.nil?
    return usr if User.encrypt(pass, usr.salt) == usr.hashed_password
    nil
  end
  
  def password=(pass)
    @password = pass
    self.salt = User.random_string(10) if !self.salt? #Do we want to change salt everytime the password is changed?
    self.hashed_password = User.encrypt(@password, self.salt)
  end

  def send_new_password
    self.email_confirmation = self.email
    new_password = User.random_string(10)
    self.password = self.password_confirmation = new_password 
    save!
    UserMailer.password_reset(self).deliver
    #assert !ActionMailer::Base.deliveries.empty?
     #Notifications.deliver_forgot_password(self.email, self.login, new_page)
  end

  def send_welcome
    self.email_confirmation = self.email
    save! 
    UserMailer.welcome_email(self).deliver
  end
  
  def isAdmin
    if self.admin
      return true
    else 
      return false
    end
  end
  
  protected
  
  def self.encrypt(pass, salt)
    Digest::SHA1.hexdigest(pass+salt)
  end

  def self.random_string(len)
    chars = ("a".."z").to_a + ("A".."Z").to_a + ("0".."9").to_a
    newpass = ""
    1.upto(len) { |i| newpass << chars[rand(chars.size-1)] }
    return newpass
  end
end
