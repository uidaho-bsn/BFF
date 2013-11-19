class AddShowFirstToFingerings < ActiveRecord::Migration
  def change
    add_column :fingerings, :show_first, :boolean, :default => false
  end
end
