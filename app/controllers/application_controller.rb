class ApplicationController < ActionController::Base

  include ApplicationHelper

  rescue_from DeviseLdapAuthenticatable::LdapException do |exception|
    render :text => exception, :status => 500
  end
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def after_sign_in_path_for(resource)
    request.referrer
  end

  def after_sign_out_path_for(resource_or_scope)
    request.referrer
  end


  #----------------------------------------------------

  private

  def authenticate
 
#    request.env.each {|k,v| Rails.logger.debug "ENV :: #{k} -> #{v}"}
#    request.headers.each {|k,v| Rails.logger.debug "HEA :: #{k} -> #{v}"}
 
    username = request.headers['HTTP_X_FORWARDED_USER']
    logger.debug "in authenticate : Username : #{username}"
 
    # authenticate_or_request_with_http_basic do |username, password|
    #session[:user] = username
    # end

    ret = authenticate_user! #if !current_user.try(:login) # call authenticate_user! from devise
    logger.debug "return val from authenticate_user: #{ret}"

  end

end
