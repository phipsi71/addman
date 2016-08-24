class ApplicationController < ActionController::Base

  include ApplicationHelper

  rescue_from DeviseLdapAuthenticatable::LdapException do |exception|
    render :text => exception, :status => 500
  end
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # def after_sign_in_path_for(resource)
  #   request.referrer
  # end

  # def after_sign_out_path_for(resource_or_scope)
  #   request.referrer
  # end

  $LOGINNAME = nil
  logger.debug "set LOGINNAME empty. LOGINNAME = #{$LOGINNAME}"
  


  def authenticate
    authenticate_user!
    unless current_user.nil?
      session[:user] = current_user
      #session[:roles] = get_roles(current_user.login) if session[:roles].nil?
      session[:user_display_name] = current_user.get_ad_display_name if session[:user_display_name].nil?
    end
  end


  private


end
