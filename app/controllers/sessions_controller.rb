class SessionsController < Devise::SessionsController

  # skip_before_filter :store_last_attempted_location
  # skip_after_filter  :store_last_successful_location
  # after_filter       :set_csrf_header, only: [:new, :create]

  before_filter :log

  skip_before_filter :verify_authenticity_token, :only => :create
  respond_to :json, :js


  def new
    ret = super
    logger.debug "SessionsController > new > after super: ret = #{ret}"
  end

protected


  def record_history
    session[:history] ||= []
    session[:history].push request.url
    session[:history] = session[:history].last(20) # limit the size to 10
  end

  def back
    session[:history].pop
  end

  def log
    logger.debug "def in SessionsController"
  end

  # def set_csrf_header
  #    response.headers['X-CSRF-Token'] = form_authenticity_token
  # end



end