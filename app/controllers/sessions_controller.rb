class SessionsController < Devise::SessionsController


  # skip_before_filter :store_last_attempted_location
  # skip_after_filter  :store_last_successful_location
  # after_filter       :set_csrf_header, only: [:new, :create]

  respond_to :js

  def new
    super
  end

  def create
    super
  end

  def destroy
    super
  end

  def failure
    logger.debug "failure devise, philipp!"
  end


  # protected

  # def set_csrf_header
  #    response.headers['X-CSRF-Token'] = form_authenticity_token
  # end


end