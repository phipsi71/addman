
class User < ActiveRecord::Base
	has_and_belongs_to_many :mailgroups

	#accepts_nested_attributes_for :title, :firstname, :lastname, :company, :street, :appendix, :city, :zip, :country, :fax, :phone, :phone2, :email, :email2, :gender, :initials, :language, :memo, :prio, :mailgroups, :function, :created_by, :updated_by

  # def self.search_for(term)
  #   # @users = User.order(:id).paginate(:page => params[:page])
  #   #Rails::logger.debug("term = " + :term)

  #   search_string = "select id, document from search_index where document @@ to_tsquery('#{term}:*')"
  #   #search_string = "select id, document from search_index where document like '%" + term + "%'"

  #   Rails::logger.debug(search_string)

  #   u = User.find_by_sql(search_string)
  #   byebug
  #   @users = u.map{ |x| User.find(x) }

  #   end

end