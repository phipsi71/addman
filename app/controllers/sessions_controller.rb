class SessionsController < Devise::SessionsController

  # skip_before_filter :store_last_attempted_location
  # skip_after_filter  :store_last_successful_location
  # after_filter       :set_csrf_header, only: [:new, :create]

  before_action :open1
   after_action :open2

  skip_before_filter :verify_authenticity_token, :only => :create
  respond_to :json, :js


  def new
    super
    logger.debug "SessionsController > new > after super"
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

  def open1
    logger.debug "entering SessionsController"
    $LOGINNAME = nil
    logger.debug "set LOGINNAME = #{$LOGINNAME}"
  end

  def open2
    if current_user
      $LOGINNAME = current_user.login
      logger.debug "set LOGINNAME = #{$LOGINNAME}"
    end
    logger.debug "exiting SessionsController"
  end


  # def set_csrf_header
  #    response.headers['X-CSRF-Token'] = form_authenticity_token
  # end



end