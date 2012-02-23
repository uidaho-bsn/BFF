require 'test_helper'

class UserTest < Test::Unit::TestCase
  def test_auth
    #Check login for valid user.
    assert_equal @bob, User.authenticate("bob", "test"), "Couldn't authenticate bob! He may not exist."
    #Check wrong username.
    assert_nil User.authenticate("nonbob", "test"), "Wrongly authenticated nonbob! He shouldn't exist."
    #Check wrong password.
    assert_nil User.authenticate("bob", "wrongpass"), "Wrongly authenticated bob's password!"
    #Check wrong username & password.
    assert_nil User.authenticate("nonbob", "wrongpass"), "Wrongly authenticated an incorrect login & password!"
  end

  def test_password_change
    #Check that an exisitng user works.
    assert_equal @longbob, User.authenticate("longbob", "longtest"), "Couldn't authenticate with current password."
    #Check changing the password.
    @longbob.password = @longbob.password_confirmation = "nonbobpasswd"
    assert @longbob.save, "Couldn't save user!"
    #Check that new password works.
    assert_equal @longbob, User.authenticate("longbob", "nonbobpasswd"), "New password did not work."
    #Check that old password doesn't work.
    assert_nil User.authenticate("longbob", "longtest"), "Old password worked and should not have."
    #Change back again.
    @longbob.password = @longbob.password_confirmation = "longtest"
    assert @longbob.save, "Couldn't save user!"
    assert_equal @longbob, User.authenticate("longbob", "longtest"), "Couldn't authenticate user with password."
    assert_nil User.authenticate("longbob", "nonbobpasswd"), "Old password managed to authnticate when it shouldn't have."
  end

  def test_disallowed_passwords
    #Setup.
    usr = User.new    
    usr.login = "nonbob"
    usr.email = "nonbob@mcbob.com"
    #Check too short.
    usr.password = usr.password_confirmation = "tiny" 
    assert !usr.save, "Couldn't save user!"
    assert usr.errors[:password], "Wrongly allowed a password that is too short."
    #Check too long.
    usr.password = usr.password_confirmation = "hugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehugehuge"
    assert !usr.save, "Couldn't save user!"
    assert usr.errors[:password], "Wrongly allowed a password that is too long."
    #Check empty.
    usr.password = usr.password_confirmation = ""
    assert !usr.save, "Couldn't save user!"
    assert usr.errors[:password], "Wrongly allowed an empty password."
    #Check valid.
    usr.password = usr.password_confirmation = "bobs_secure_password"
    assert usr.save, "Couldn't save user!"
    assert usr.errors.empty?, "Wrongly disallowed a valid password."
  end

  def test_bad_username
    #Setup.
    usr = User.new  
    usr.password = usr.password_confirmation = "bobs_secure_password"
    usr.email = "okbob@mcbob.com"
    #Check too short.
    usr.login = "x"
    assert !usr.save, "Couldn't save user!"
    assert usr.errors[:login], "Wrongly allowed a short username."
    #Check too long.
    usr.login = "hugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhugebobhug"
    assert !usr.save, "Couldn't save user!"
    assert usr.errors[:login], "Wrongly allowed a long username."
    #Check empty.
    usr.login = ""
    assert !usr.save, "Couldn't save user!"
    assert usr.errors[:login], "Wrongly allowed an empty username."
    #Check valid.
    usr.login = "okbob"
    assert usr.save, "Couldn't save user!"
    assert usr.errors.empty?, "Wrongly disallowed a correct username."
  end

  def test_invalid_email
    #Setup.
    usr = User.new
    usr.login = "nonbob"
    usr.password = usr.password_confirmation = "bobs_secure_password"
    #Check invalid email.
    usr.email='notavalidemail'
    assert !usr.save, "Couldn't save user!"
    assert usr.errors[:email], "Wrongly allowed an incorrect email."
    #Check no email.
    usr.email=""
    assert !usr.save, "Couldn't save user!"
    assert usr.errors[:email], "Wrongly allowed an empty email."
    #Check valid email.
    usr.email = "okbob@mcbob.com"
    assert usr.save, "Couldn't save user!"
    assert usr.errors.empty?, "Wrongly disallowed a correct email."
  end

  def test_collision
    #Check creating a new user with existing username.
    usr = User.new
    usr.login = "existingbob"
    usr.password = usr.password_confirmation = "bobs_secure_password"
    assert !usr.save, "Wrongly allowed a username collision."
  end

  def test_create
    #Check that create works and we can authenticate after creation.
    usr = User.new
    usr.login = "nonexistingbob"
    usr.password = usr.password_confirmation = "bobs_secure_password"
    usr.email = "nonexistingbob@mcbob.com"  
    assert_not_nil usr.salt, "User's salt not set!"
    assert usr.save, "Couldn't save user!"
    assert_equal 10, usr.salt.length, "User's salt is too short!"
    assert_equal usr, User.authenticate(usr.login, usr.password), "Couldn't authenticate the created user!"

    usr = User.new(:login => "newbob", :password => "newpassword", :password_confirmation => "newpassword", :email => "newbob@mcbob.com" )
    assert_not_nil usr.salt, "User's salt not set!"
    assert_not_nil usr.password, "User's password not set!"
    assert_not_nil usr.hashed_password, "User's hased password not set!"
    assert usr.save, "Couldn't save user!"
    assert_equal usr, User.authenticate(usr.login, usr.password), "Couldn't authenticated the created user!"
  end

  def test_send_new_password
    #Check that the user authenticates.
    assert_equal  @bob, User.authenticate("bob", "test"), "Couldn't authenticate a valid user."
    #Check sending a new password.
    sent = @bob.send_new_password
    assert_not_nil sent, "New password not assigned!"
    #Check old password no longer works.
    assert_nil User.authenticate("bob", "test"), "Wrongly allowed user's old password to work."
    #Check email sent.
    assert_equal "Your password is ...", sent.subject, "Email as not sent."
    #Check it was to bob.
    assert_equal @bob.email, sent.to[0], "Email was sent to wrong user."
    assert_match Regexp.new("Your username is bob."), sent.body, "Email was sent to wrong user."
    #Check that new password works.
    new_pass = $1 if Regexp.new("Your new password is (\\w+).") =~ sent.body 
    assert_not_nil new_pass, "New password is null."
    assert_equal  @bob, User.authenticate("bob", new_pass), "Could authenticate with the new password."    
  end

  def test_rand_str
    new_pass = User.random_string(10)
    assert_not_nil new_pass, "Random string not created."
    assert_equal 10, new_pass.length, "Random string not long enough."
  end

  def test_sha1
    usr = User.new
    usr.login = "nonexistingbob"
    usr.email = "nonexistingbob@mcbob.com"  
    usr.salt = "1000"
    usr.password = usr.password_confirmation = "bobs_secure_password"
    assert usr.save, "Couldn't save user!"
    assert_equal 'b1d27036d59f9499d403f90e0bcf43281adaa844', usr.hashed_password, "User's hashed password not equal to correct hash."
    assert_equal 'b1d27036d59f9499d403f90e0bcf43281adaa844', User.encrypt("bobs_secure_password", "1000"), "Users hashed password doesn't match encrypt's hashed password."
  end
end