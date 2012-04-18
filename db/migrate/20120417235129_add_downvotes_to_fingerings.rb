class AddDownvotesToFingerings < ActiveRecord::Migration
  def change
      add_column :fingerings, :dvotes_beginner, :int
      add_column :fingerings, :dvotes_intermediate, :int
      add_column :fingerings, :dvotes_advanced, :int
      add_column :fingerings, :dvotes_professional, :int
  end
end
