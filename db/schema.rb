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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170429145927) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "tablefunc"
  enable_extension "unaccent"
  enable_extension "dblink"

  create_table "lists", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email_id",   limit: 255
    t.string   "type",       limit: 255
    t.text     "query"
    t.string   "admin",      limit: 255
  end

  create_table "lists_mailgroups", id: false, force: :cascade do |t|
    t.integer "mailgroup_id"
    t.integer "list_id"
  end

  create_table "mailgroups", force: :cascade do |t|
    t.string   "name",          limit: 255
    t.text     "memo"
    t.string   "trialcode",     limit: 255
    t.string   "created_by",    limit: 255
    t.string   "updated_by",    limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "robinson_id"
    t.integer  "robinson_type"
    t.string   "type"
    t.text     "query"
    t.string   "country"
    t.string   "role"
  end

  add_index "mailgroups", ["id"], name: "index_mailgroups_on_groupid", using: :btree
  add_index "mailgroups", ["robinson_id"], name: "index_mailgroups_on_robinson_id", using: :btree

  create_table "mailgroups_users", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "mailgroup_id"
  end

  add_index "mailgroups_users", ["mailgroup_id", "user_id"], name: "index_mailgroups_users_on_mailgroup_id_and_user_id", unique: true, using: :btree
  add_index "mailgroups_users", ["user_id", "mailgroup_id"], name: "index_mailgroups_users_on_user_id_and_mailgroup_id", unique: true, using: :btree

  create_table "temp_OPS", id: false, force: :cascade do |t|
    t.text "anrede"
    t.text "akadtitel"
    t.text "vorname"
    t.text "nachname"
    t.text "zweitname"
    t.text "adresszusatz"
    t.text "strasse"
    t.text "postfach"
    t.text "plz"
    t.text "ort"
    t.text "landkrz"
  end

  create_table "temp_SGMO", id: false, force: :cascade do |t|
    t.text "titel"
    t.text "name"
    t.text "vorname"
    t.text "institution"
    t.text "abteilung"
    t.text "strasse"
    t.text "land"
    t.text "plz"
    t.text "ort"
    t.text "email"
    t.text "webseite"
    t.text "geschlecht"
    t.text "korrespondenzsprache"
  end

  create_table "users", force: :cascade do |t|
    t.string   "salutation",          limit: 255
    t.string   "title",               limit: 255
    t.string   "firstname",           limit: 255
    t.string   "lastname",            limit: 255
    t.string   "function",            limit: 255
    t.string   "company",             limit: 255
    t.string   "appendix",            limit: 255
    t.string   "street",              limit: 255
    t.string   "city",                limit: 255
    t.string   "zip",                 limit: 255
    t.string   "country",             limit: 255
    t.string   "fax",                 limit: 255
    t.string   "phone",               limit: 255
    t.string   "phone2",              limit: 255
    t.string   "email",               limit: 255
    t.string   "email2",              limit: 255
    t.string   "gender",              limit: 255
    t.string   "sakkrole",            limit: 255
    t.string   "language",            limit: 255
    t.text     "memo"
    t.string   "prio",                limit: 255
    t.string   "groupsbefore",        limit: 512
    t.string   "created_by",          limit: 255
    t.string   "updated_by",          limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "login",               limit: 255, default: "", null: false
    t.string   "encrypted_password",  limit: 255, default: "", null: false
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",  limit: 255
    t.string   "last_sign_in_ip",     limit: 255
  end

  add_index "users", ["id"], name: "index_users_on_userid", using: :btree

end
