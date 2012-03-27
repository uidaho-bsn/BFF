class ChangeUserNameType < ActiveRecord::Migration
  def change
    change_column :fingerings, :user_name, :string
  end
end
