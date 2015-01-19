class CreateUsersMailgroups < ActiveRecord::Migration
  def change
    create_table :mailgroups_users, id: false do |t|

	t.references :user
	t.references :mailgroup

    end
  end
end
