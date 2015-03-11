class List < ActiveRecord::Base
  has_and_belongs_to_many :mailgroups
  

  # this no good
  #has_many :mailgroups
  #has_many :users, through: :mailgroups
end
