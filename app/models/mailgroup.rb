class Mailgroup < ActiveRecord::Base

  self.table_name  = "groups"
  self.primary_key = "id"

	has_and_belongs_to_many :users
  has_and_belongs_to_many :lists  #, join_table: 'groups_lists'


  validates :name, uniqueness: true

  scope :searched, ->(term) { where("name ILIKE '%#{term}%'") if term.present? }


  # def user_count
  #   users.count
  # end

  # def self.sort_by_user_count
  #   sort_by(&:user_count)
  # end

end
