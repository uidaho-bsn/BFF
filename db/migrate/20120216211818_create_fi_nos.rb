class CreateFiNos < ActiveRecord::Migration
  def change
    create_table :fi_nos do |t|
      t.Note :noteID
      t.list :fingeringIDList

      t.timestamps
    end
  end
end
