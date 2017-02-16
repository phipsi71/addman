class Intlist < List
  

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
