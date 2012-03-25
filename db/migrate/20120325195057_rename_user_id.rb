class RenameUserId < ActiveRecord::Migration
  def change
    rename_column :fingerings, :user_id, :user_name
  end
end
