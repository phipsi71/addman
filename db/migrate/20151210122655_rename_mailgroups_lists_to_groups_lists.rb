class RenameMailgroupsListsToGroupsLists < ActiveRecord::Migration
   def self.up
    rename_table :lists_mailgroups, :groups_lists
    rename_table :mailgroups_users, :groups_users
  end 
  def self.down
    rename_table :groups_lists, :lists_mailgroups
    rename_table :groups_users, :mailgroups_users
  end
end
