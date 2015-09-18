class Mailgroup < ActiveRecord::Base
	has_and_belongs_to_many :users
  has_and_belongs_to_many :lists

  validates :name, uniqueness: true

  scope :oname, order("name desc")
  
end
