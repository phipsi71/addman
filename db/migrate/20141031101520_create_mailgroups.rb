class CreateMailgroups < ActiveRecord::Migration
  def change
    create_table :mailgroups do |t|
      t.integer :groupid
      t.string :name
      t.text :memo
      t.string :trialcode
      t.string :importance
      t.string :created_by
      t.string :updated_by
      t.timestamp :created_at
      t.timestamp :updated_at

      t.timestamps
    end
    add_index :mailgroups, :groupid
  end
end
