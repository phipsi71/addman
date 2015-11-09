class CreateSalutations < ActiveRecord::Migration
  def change
    create_table :salutations do |t|
      t.string :lang, limit: 1
      t.string :gender, limit: 1
      t.string :salutation

      t.timestamps
    end
  end
end
