
class SearchIndex < ActiveRecord::Base

  #accepts_nested_attributes_for :title, :firstname, :lastname, :company, :street, :appendix, :city, :zip, :country, :fax, :phone, :phone2, :email, :email2, :gender, :initials, :language, :memo, :prio, :mailgroups, :function, :created_by, :updated_by

  # def self.search_for(term)
    
  #   #Rails::logger.debug("term = " + term)

  #   # this gives us the ActiveRecord::Relation von SearchIndex.
  #   # logger.debug "search_term = #{term.split.join(':* | ') + ':*'}"
  #   # u = self.where("document @@ to_tsquery(?)", term.split.join(":* | ") + ":*" )

  #   t = term.split.join(":* & ") + ":*"  # pipe symbol means OR

  #   u = connection.select_all("
  #       SELECT ts_rank_cd(document, query, 1) AS rank, si.id
  #       FROM search_indices si, to_tsquery(unaccent('#{t}')) query
  #       WHERE query @@ document
  #   ")

  #   # now stuff the id's into an array
  #   # i = u.map{ |x| User.find(x).id }
  #   ids = []
  #   u.map do |i|
  #       i.select do |k,v|
  #           ids << v if k == 'id'
  #       end
  #   end

  #   # now make an activerecord relation for the object 'User'
  #   # and return the ActiveRecord::Relation
  #   # this is equal to select * from users where id in ids.   --> ids is an Array
  #   User.where(id: ids)

  # end

end
