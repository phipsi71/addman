
class SearchIndex < ActiveRecord::Base

	#accepts_nested_attributes_for :title, :firstname, :lastname, :company, :street, :appendix, :city, :zip, :country, :fax, :phone, :phone2, :email, :email2, :gender, :initials, :language, :memo, :prio, :mailgroups, :function, :created_by, :updated_by

  def self.search_for(term)
    
    #Rails::logger.debug("term = " + term)

    # this gives us the ActiveRecord::Relation von SearchIndex.
    u = self.where("document @@ to_tsquery(?)", term)
    # now stuff the id's in an array
    i = u.map{ |x| User.find(x).id }
    # now make an activerecord relation for the object 'User' (and not SearchIndex as above)
    # and return the ActiveRecord::Relation
    # this is equal to select * from users where id in i.   :: i is an Array
    User.where(id: i)
  end

end
