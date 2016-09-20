class AddAdminToLists < ActiveRecord::Migration
  def change
    add_column :lists, :admin, :string
  end
end
