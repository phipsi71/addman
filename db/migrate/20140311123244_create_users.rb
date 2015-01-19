class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
	
      t.integer :userid
      t.string :salutation
      t.string :title
      t.string :firstname
      t.string :lastname
      t.string :function
      t.string :company
      t.string :appendix
      t.string :street
      t.string :city
      t.string :zip
      t.string :country
      t.string :fax
      t.string :phone
      t.string :phone2
      t.string :email
      t.string :email2
      t.string :gender
      t.string :initials
      t.string :language
      t.text   :memo
      t.string :prio
      t.string :mailgroups
      t.string :created_by
      t.string :updated_by
      t.timestamps
	  
    end
    add_index :users, :userid
  end
end

