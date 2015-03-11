class CreateMailgroupsLists < ActiveRecord::Migration
  def change
    create_table :mailgroups_lists, id: false do |t|
      t.integer  :mailgroup_id
      t.integer  :list_id
    end
  end
end
