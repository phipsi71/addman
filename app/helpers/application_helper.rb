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


  # def sortable_count(column, title = nil)
  #   logger.debug "application_helper sortable_count, controller = #{controller_name}"
  #   title ||= column.titleize
  #   css_class = (sort_column == 'count') ? "current #{sort_direction}" : nil
  #   direction = (sort_column == 'count' && sort_direction == "asc") ? "desc" : "asc"
  #   link_to title, {term: @term, sort: column, direction: direction}, {class: css_class}
  # end



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
    logger.debug "session-user = #{current_user.login unless current_user.nil?}"
    current_user.login unless current_user.nil?
  end

  # def mutation?
  #   logger.debug "in def mutation? : MUTATION_GROUP = #{MUTATION_GROUP}"
  #   logger.debug "in def mutation? : @roles = #{@roles}"
  #   logger.debug "t: #{@roles.include? MUTATION_GROUP unless @roles.nil?}"
  #   @roles.include? MUTATION_GROUP unless @roles.nil?
  # end

  # def role_set?(role_name)
  #   logger.debug "session-roles : #{session[:roles]}"
  #   not session[:roles].nil? and session[:roles].include? role_name
  # end

  # def has_role? (role_name, groups)
  #   logger.debug "has_role"
  #   not groups.nil? and not groups.index{ |x| x.include?('CN=' + role_name + ',')}.nil?
  # end

  # def get_groups(login)
  #   logger.debug "get_groups"
  #   Devise::LDAP::Adapter.get_ldap_param(login, "memberOf") || []
  # end


  # def get_roles(login)
  #     logger.debug "get_roles login: #{login}"
  #     groups = get_groups(login)
  #     @roles = []
  #     @roles.push(MUTATION_GROUP) if has_role?(MUTATION_GROUP, groups)
  # end


end

