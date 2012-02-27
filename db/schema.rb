# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120216211413) do

  create_table "fingerings", :force => true do |t|
    t.integer  "LT1"
    t.integer  "LT2"
    t.integer  "LT3"
    t.integer  "LT4"
    t.integer  "LT5"
    t.integer  "LT6"
    t.integer  "LT7"
    t.integer  "W"
    t.integer  "RT1"
    t.integer  "RT2"
    t.integer  "RT3"
    t.integer  "RT4"
    t.integer  "LeftI"
    t.integer  "LeftM"
    t.integer  "LeftR"
    t.integer  "LeftL"
    t.integer  "RightI"
    t.integer  "RightM"
    t.integer  "RightR"
    t.integer  "RightL"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "notes", :force => true do |t|
    t.string   "note",       :limit => nil
    t.string   "tone",       :limit => nil
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "login"
    t.string   "hashed_password"
    t.string   "email"
    t.string   "salt"
    t.datetime "created_at"
  end

end
