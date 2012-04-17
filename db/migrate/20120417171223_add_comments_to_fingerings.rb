class AddCommentsToFingerings < ActiveRecord::Migration
  def change
    add_column :fingerings, :comments, :string
  end
end
