class CreateFingerings < ActiveRecord::Migration
  def change
    create_table :fingerings do |t|
      t.int :LT1
      t.int :LT2
      t.int :LT3
      t.int :LT4
      t.int :LT5
      t.int :LT6
      t.int :LT7
      t.int :W
      t.int :RT1
      t.int :RT2
      t.int :RT3
      t.int :RT4
      t.int :LeftI
      t.int :LeftM
      t.int :LeftR
      t.int :LeftL
      t.int :RightI
      t.int :RightM
      t.int :RightR
      t.int :RightL

      t.timestamps
    end
  end
end
