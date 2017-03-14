class Intmailgroup < Mailgroup
  
  # validates :name, uniqueness: true
  # validates :email_id, uniqueness: true

  # has_one   :mailgroup, as: :robinson

  # scope :own, -> { where(admin: $LOGINNAME) }

  scope :searched, -> {null}

  def users
    query = self.query
    logger.debug ("in model intmailgroup, query = #{query}")
    unless query.empty?    
      @users = TrialContacts.where("#{query}")
    else
      @users = nil
    end
  end

end
