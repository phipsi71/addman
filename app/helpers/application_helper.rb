module ApplicationHelper


  def devise_mapping
    Devise.mappings[:user]
  end

  def resource_name
    devise_mapping.name
  end

  def resource
    resource ||= User.new
  end    

  def resource_class
    devise_mapping.to
  end


  def sortable(column, title = nil)
    logger.debug "controller = #{controller_name}"
    title ||= column.titleize
    logger.debug "Title = #{title}"
    css_class = (column == sort_column) ? "current #{sort_direction}" : nil
    logger.debug "CSS class = #{css_class}"
    direction = (column == sort_column && sort_direction == "asc") ? "desc" : "asc"
    logger.debug "direction = #{direction}"
    link_to title, {term: @term, sort: column, direction: direction}, {class: css_class}
    # what link_to creates:
    # <a class="current asc" href="/mailgroups?direction=desc&amp;sort=name">Name</a>
    # <a href="/mailgroups?direction=asc&amp;sort=%23+Users"># Users</a>
  end


  def sortable_count(column, title = nil)
    title ||= column.titleize
    css_class = (sort_column == 'count') ? "current #{sort_direction}" : nil
    direction = (sort_column == 'count' && sort_direction == "asc") ? "desc" : "asc"
    link_to title, {term: @term, sort: column, direction: direction}, {class: css_class}
    # what link_to creates:
    # <a class="current asc" href="/mailgroups?direction=desc&amp;sort=name">Name</a>
    # <a href="/mailgroups?direction=asc&amp;sort=%23+Users"># Users</a>
  end


  # def sort_column
  #   if User.column_names.include?(params[:sort])
  #     logger.debug "USER sort_column: #{params[:sort]}, #{controller_name}"
  #     colsort = params[:sort]
  #   elsif Mailgroup.column_names.include?(params[:sort]) 
  #     logger.debug "MAILGROUP sort_column: #{params[:sort]},  #{controller_name}"
  #     colsort = params[:sort]
  #   else
  #     colsort = "nocolsort"
  #   end
  #   logger.debug "APPHELPER params[:sort] = #{params[:sort]},  #{controller_name}"
  #   return colsort
  # end


  def sort_column
    params[:sort]
  end

  def sort_direction
    %w[asc desc].include?(params[:direction]) ?  params[:direction] : "asc"
  end



end

