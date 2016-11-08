class SessionsController < Devise::SessionsController

  # skip_before_filter :store_last_attempted_location
  # skip_after_filter  :store_last_successful_location
  # after_filter       :set_csrf_header, only: [:new, :create]

  skip_before_filter :verify_authenticity_token, only: :create
  respond_to :json, :js


  def create
    super
    #redirect_to root_url
    if current_user.nil?
      session[:user] = current_user
      session[:user_display_name] = current_user.get_ad_display_name if session[:user_display_name].nil?
      $LOGINNAME = current_user.login
      logger.debug "LOGINNAME = #{$LOGINNAME}"
      logger.debug "user_display_name = #{session[:user_display_name]}"
    end    
  end


  def new
    super
  end

  # def destroy
  #   $LOGINNAME = ""
  # end


protected

  def record_history
    session[:history] ||= []
    session[:history].push request.url
    session[:history] = session[:history].last(20) # limit the size to 10
  end

  def back
    session[:history].pop
  end


 
  # def set_csrf_header
  #    response.headers['X-CSRF-Token'] = form_authenticity_token
  # end



end