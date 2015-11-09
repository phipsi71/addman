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
    css_class = (column == sort_column) ? "current #{sort_direction}" : nil
    direction = (column == sort_column && sort_direction == "asc") ? "desc" : "asc"
    link_to title, {term: @term, sort: column, direction: direction}, {class: css_class}
    # what link_to creates:
    # <a class="current asc" href="/mailgroups?direction=desc&amp;sort=name">Name</a>
    # <a href="/mailgroups?direction=asc&amp;sort=%23+Users"># Users</a>
  end


  def sortable_count(column, title = nil)
    logger.debug "controller = #{controller_name}"
    title ||= column.titleize
    css_class = (sort_column == 'count') ? "current #{sort_direction}" : nil
    direction = (sort_column == 'count' && sort_direction == "asc") ? "desc" : "asc"
    link_to title, {term: @term, sort: column, direction: direction}, {class: css_class}
    # what link_to creates:
    # <a class="current asc" href="/mailgroups?direction=desc&amp;sort=name">Name</a>
    # <a href="/mailgroups?direction=asc&amp;sort=%23+Users"># Users</a>
  end


end

