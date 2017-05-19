class AddRoleToMailgroup < ActiveRecord::Migration
  def change
    add_column :mailgroups, :role, :string
  end
end
