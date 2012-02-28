class CreateFiNos < ActiveRecord::Migration
=begin
  def change
    create_table :fi_nos do |t|
      t.column :noteID, :Note
      t.column :fingeringIDList, :list

      t.timestamps
    end
  end
=end
end
