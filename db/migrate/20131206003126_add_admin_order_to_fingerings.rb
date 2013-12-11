class AddAdminOrderToFingerings < ActiveRecord::Migration
  def change
    add_column :fingerings, :admin_order, :integer
  end
end
