class AddIndexToUsersMailgroups < ActiveRecord::Migration
  def change

    add_index :mailgroups_users, [:mailgroup_id, :user_id], unique: true
    add_index :mailgroups_users, [:user_id, :mailgroup_id], unique: true

  end
end
