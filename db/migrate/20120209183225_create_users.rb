class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.column :login, :string
      t.column :hashed_password, :string
      t.column :email, :string
      t.column :salt, :string
      t.column :created_at, :datetime
      t.column :password_reset_token, :string
      t.column :password_reset_sent_at, :datetime
      t.column :admin, :boolean
    end
  end

  def self.down
    drop_table :users
  end
end
