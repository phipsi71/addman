class List < ActiveRecord::Base

  has_and_belongs_to_many :mailgroups  
  
  validates :name, uniqueness: true
  validates :email_id, uniqueness: true

  has_one :mailgroup, as: :robinson

  scope :own, -> { where(admin: $LOGINNAME)}

  # this no good
  #has_many :mailgroups
  #has_many :users, through: :mailgroups

end
