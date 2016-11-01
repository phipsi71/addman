class Intlist < List
  
  validates :name, uniqueness: true
  validates :email_id, uniqueness: true

  has_one   :mailgroup, as: :robinson

  # scope :own, -> { where(admin: $LOGINNAME) }
  # scope :intelligent, -> { where('query is not NULL') }

  def mailgroups
    query = self.query
    logger.debug ("in model intlist, query = #{query}")
    unless query.empty?    
      @mailgroups = Mailgroup.where("#{query}")
    else
      @mailgroups = nil
    end
  end 



end
