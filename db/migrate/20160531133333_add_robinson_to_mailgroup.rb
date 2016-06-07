class AddRobinsonToMailgroup < ActiveRecord::Migration
  def change
    add_reference :mailgroups, :robinson, index: true
    add_column :mailgroups, :robinson_type, :int
  end
end
