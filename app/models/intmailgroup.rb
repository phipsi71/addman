class Intmailgroup < Mailgroup


  #validates :query, presence: true
  #validates :query, query: true  # see validators/query_validator.rb
  #validates :query, presence: true, query: true

  def users
    # logger.debug ("in model intmailgroup, def users, query=#{self.query}.")
    # q = self.query.split.map{ |s| s.split("=") }
    q={}
    q.merge!(trial_code: self.trialcode) if self.trialcode.present?
    q.merge!(role: self.role)            if self.role.present?
    q.merge!(country: self.country)      if self.country.present?
    
    
    if self.query.present?
      logger.debug "Intmailgroup.users : q=#{q}, query=#{query}"
      @users = TrialContacts.distinct.\
      select('id, salutation, title, firstname, lastname, function, company, appendix, street, city, zip, fax, phone, phone2, email, email2, gender, sakkrole, language, memo').where(q).where(self.query)
    else
      logger.debug "Intmailgroup.users : q=#{q}"
      @users = TrialContacts.distinct.\
      select('id, salutation, title, firstname, lastname, function, company, appendix, street, city, zip, fax, phone, phone2, email, email2, gender, sakkrole, language, memo').where(q)
    end

  end


end