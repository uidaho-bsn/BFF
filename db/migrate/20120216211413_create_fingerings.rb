class CreateFingerings < ActiveRecord::Migration
  def change
    create_table :fingerings do |t|
      t.column :LT1, :int
      t.column :LT2, :int
      t.column :LT3, :int
      t.column :LT4, :int
      t.column :LT5, :int
      t.column :LT6, :int
      t.column :LT7, :int
      t.column :W, :int
      t.column :RT1, :int
      t.column :RT2, :int
      t.column :RT3, :int
      t.column :RT4, :int
      t.column :LeftI, :int
      t.column :LeftM, :int
      t.column :LeftR, :int
      t.column :LeftL, :int
      t.column :RightI, :int
      t.column :RightM, :int
      t.column :RightR, :int
      t.column :RightL, :int

      t.timestamps
    end
  end
end
