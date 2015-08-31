class ApplicationController < ActionController::Base
  rescue_from DeviseLdapAuthenticatable::LdapException do |exception|
    render :text => exception, :status => 500
  end
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  private
    def authenticate
   
  #    request.env.each {|k,v| Rails.logger.debug "ENV :: #{k} -> #{v}"}
  #    request.headers.each {|k,v| Rails.logger.debug "HEA :: #{k} -> #{v}"}
   
      username = request.headers['HTTP_X_FORWARDED_USER']
      logger.debug "Username : #{username}"
   
      # authenticate_or_request_with_http_basic do |username, password|
      session[:user] = username
      # end
 
      authenticate_user!  # from devise
    end

end
