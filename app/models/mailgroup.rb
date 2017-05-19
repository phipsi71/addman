class Mailgroup < ActiveRecord::Base

  has_and_belongs_to_many :users
  has_and_belongs_to_many :lists
  has_many :trial_contacts


  validates :name, uniqueness: true, presence: true
  #validates :query, presence: false

  scope :searched,    -> (term) { where("name ILIKE '%#{term}%'") if term.present? }
  scope :is_robinson, -> { where('robinson_id is not NULL') }
  # scope :regular,     -> { where('query is NULL') }

end
