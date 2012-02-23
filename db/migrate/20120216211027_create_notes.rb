class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.char :note
      t.char :tone

      t.timestamps
    end
  end
end
