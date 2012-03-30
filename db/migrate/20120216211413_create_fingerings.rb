class CreateFingerings < ActiveRecord::Migration
  def self.up
    create_table :fingerings do |t|
      t.column :note_tone, :string
      t.column :fingering_status, :string
      t.column :user_name, :string
      t.column :votes_beginner, :int
      t.column :votes_intermediate, :int
      t.column :votes_advanced, :int
      t.column :votes_professional, :int
      t.column :created_at, :datetime
      t.column :approved, :bool
      t.column :type, :string #Standard, Alternate, Pianissimo, Trill, Shake
      t.column :source, :string
    end
  end
  
  def self.down
    drop_table :fingerings
  end
end
