class AddQueryToMailgroup < ActiveRecord::Migration
  def change
    add_column :mailgroups, :type, :string
    add_column :mailgroups, :query, :text
  end
end
