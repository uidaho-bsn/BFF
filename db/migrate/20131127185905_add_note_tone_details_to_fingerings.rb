class AddNoteToneDetailsToFingerings < ActiveRecord::Migration
  def change
    add_column :fingerings, :octave, :integer
    add_column :fingerings, :accidental, :integer
    add_column :fingerings, :note_name, :string
  end
end
