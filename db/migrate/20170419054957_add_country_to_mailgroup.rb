class AddCountryToMailgroup < ActiveRecord::Migration
  def change
    add_column :mailgroups, :country, :string
  end
end
