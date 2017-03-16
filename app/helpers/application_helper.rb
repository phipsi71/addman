module ApplicationHelper

  @roles = []

  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end


  def sortable(column, title = nil)
    logger.debug "application_helper sortable, controller = #{controller_name}"
    title ||= column.titleize
    css_class = (column == sort_column) ? "current #{sort_direction}" : nil
    direction = (column == sort_column && sort_direction == "asc") ? "desc" : "asc"
    link_to title, {term: @term, sort: column, direction: direction}, {class: css_class}
  end


  def sort_column
    logger.debug "application_helper sort_column , controller name = #{controller_name}"
    if User.column_names.include?(params[:sort])
      params[:sort]
    elsif Mailgroup.column_names.include?(params[:sort])
      params[:sort]
    else 
    end
  end


  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end


  def mutation?
    #logger.debug "session-user = #{current_user.login unless current_user.nil?}"
    current_user.login unless current_user.nil?
  end

  def list_admin?(list)
    mutation? == list.admin unless list.admin.nil?
  end


end

