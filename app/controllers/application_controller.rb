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
  


  def authenticate
    logger.debug "def authenticate , current_user.login = #{current_user.login}"
    authenticate_user!
  end

  private

end
