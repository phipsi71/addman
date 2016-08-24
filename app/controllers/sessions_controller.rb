class SessionsController < Devise::SessionsController

  # skip_before_filter :store_last_attempted_location
  # skip_after_filter  :store_last_successful_location
  # after_filter       :set_csrf_header, only: [:new, :create]



  skip_before_filter :verify_authenticity_token, only: :create
  respond_to :json, :js


  def create
    super
    $LOGINNAME = current_user.login
    logger.debug "set LOGINNAME = #{$LOGINNAME}"
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