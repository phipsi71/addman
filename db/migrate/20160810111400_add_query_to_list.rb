class AddQueryToList < ActiveRecord::Migration
  def change
    add_column :lists, :type, :string
    add_column :lists, :query, :text
  end
end
