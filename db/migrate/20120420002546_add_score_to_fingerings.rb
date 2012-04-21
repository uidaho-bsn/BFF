class AddScoreToFingerings < ActiveRecord::Migration
  def change
    add_column :fingerings, :score, :float

  end
end
