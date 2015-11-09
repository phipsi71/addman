class AddEmailIdToList < ActiveRecord::Migration
  def change
    add_column :lists, :email_id, :string
  end
end
