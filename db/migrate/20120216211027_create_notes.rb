class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.column :note, :char
      t.column :tone, :char

      t.timestamps
    end
  end
end
