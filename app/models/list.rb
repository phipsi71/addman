class List < ActiveRecord::Base
  has_and_belongs_to_many :mailgroups  #, join_table: 'groups_lists'
  #has_and_belongs_to_many :users, through: :mailgroups
  
  validates :name, uniqueness: true
  validates :email_id, uniqueness: true

  # this no good
  #has_many :mailgroups
  #has_many :users, through: :mailgroups
end
