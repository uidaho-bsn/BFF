class ChangeTypeToKeyTypeInFingerings < ActiveRecord::Migration
  def change
    rename_column :fingerings, :type, :keytype
  end
end
