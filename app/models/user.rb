class User < ActiveRecord::Base
	has_and_belongs_to_many :mailgroups
  #has_and_belongs_to_many :lists, through: :mailgroups

	#accepts_nested_attributes_for :title, :firstname, :lastname, :company, :street, :appendix, :city, :zip, :country, :fax, :phone, :phone2, :email, :email2, :gender, :initials, :language, :memo, :prio, :mailgroups, :function, :created_by, :updated_by

  #validates_uniqueness_of :user_id, scope: :mailgroup_id

end