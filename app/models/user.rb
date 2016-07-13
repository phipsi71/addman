class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  #        :recoverable, :rememberable, :trackable, :validatable, :registerable
  devise :ldap_authenticatable, :rememberable, :trackable

	has_and_belongs_to_many :mailgroups
  #has_and_belongs_to_many :lists, through: :mailgroups


  def self.searched(term)
    
    #Rails::logger.debug("term = " + term)

    # this gives us the ActiveRecord::Relation von SearchIndex.
    # logger.debug "search_term = #{term.split.join(':* | ') + ':*'}"
    # u = self.where("document @@ to_tsquery(?)", term.split.join(":* | ") + ":*" )

    term.gsub!(/[^0-9A-Za-z\-+ ]/, '')
    t = term.split.join(":* & ") + ":*"  # pipe symbol means OR, & symbol means AND

    u = SearchIndex.connection.select_all("
        SELECT ts_rank_cd(document, query, 1) AS rank, si.id
        FROM search_indices si, to_tsquery(unaccent('#{t}')) query
        WHERE query @@ document
        order by rank
    ")

    # now stuff the id's into an array
    # i = u.map{ |x| User.find(x).id }
    ids = []
    u.map do |i|
        i.select do |k,v|
            ids << v if k == 'id'
        end
    end

    # now make an activerecord relation for the object 'User'
    # and return the ActiveRecord::Relation
    # this is equal to select * from users where id in ids.   --> ids is an Array
    self.where(id: ids)

  end


end



  #accepts_nested_attributes_for :title, :firstname, :lastname, :company, :street, :appendix, :city, :zip, :country, :fax, :phone, :phone2, :email, :email2, :gender, :initials, :language, :memo, :prio, :mailgroups, :function, :created_by, :updated_by
  #validates_uniqueness_of :user_id, scope: :mailgroup_id
  #scope :searched, ->(term) { where("created_at < ?", term) }

