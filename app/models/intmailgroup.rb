class Intmailgroup < Mailgroup


  #validates :query, presence: true
  #validates :query, query: true  # see validators/query_validator.rb
  #validates :query, presence: true, query: true

  def user
    # logger.debug ("in model intmailgroup, def users, query=#{self.query}.")
    # q = self.query.split.map{ |s| s.split("=") }
    q = { trial_code: self.trialcode, role: self.role, country: self.country }
    # q = q.to_h
    @users = TrialContacts.where(q)
  end

end