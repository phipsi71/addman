class MailgroupsController < ApplicationController

  require 'mailgroups_helper'
  #caches_page   :index
  # rescue_from ActionController::ParameterMissing, with: :param_missing


  before_action :authenticate, except: [:index, :search_for, :show, :search, :mailto, :print, :append, :remove]
  before_action :set_mailgroup, only:  [:show, :edit, :update, :destroy, :mailto, :print, :remove, :remove_list]
  before_action :set_term, only: [:index]
  before_action :set_sort, only: [:index, :show]

  helper_method :sort_column, :sort_direction

  respond_to :html, :json, :js

  # GET /mailgroups
  # GET /mailgroups.json
  def index
    @c ||= 'name'
    @mailgroups  = Mailgroup.searched(@term).order(@c + ' ' + @d).paginate(page: params[:page])
    #respond_with (@mailgroups)
    respond_to do |format|
        format.html # will call index.html.erb
        format.json { render json: @mailgroups }
        #format.js   # will call index.js.coffee
    end    
  end


  # GET /mailgroups/1
  # GET /mailgroups/1.json
  def show
    @c ||= 'lastname'
  end

  # GET /mailgroups/new
  def new
    @mailgroup = Mailgroup.new
    @mailgroup.created_by = current_user.login
    @mailgroup.created_at = Time.now
  end

  # GET /mailgroups/1/edit
  def edit
  end

  # POST /mailgroups
  # POST /mailgroups.json
  def create
    
    @mailgroup.created_by = current_user.login
    @mailgroup.created_at = Time.now
    respond_to do |format|
      if @mailgroup.save
        format.html { redirect_to @mailgroup, notice: 'Mailgroup was successfully created.' }
        format.json { render :show, status: :created, location: @mailgroup }
      else
        format.html { render :new }
        format.json { render json: @mailgroup.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /mailgroups/1
  # PATCH/PUT /mailgroups/1.json
  def update
    # @mailgroup.updated_by = current_user.login
    # @mailgroup.updated_at = Time.now
    # @query = get_query(params)
    # logger.debug "in def update, query=#{@query}"
    logger.debug "UPDATE intmailgroup, intparams : #{@mailgroup.trialcode} #{@mailgroup.role} #{@mailgroup.country}"
    if ("#{@mailgroup.trialcode} #{@mailgroup.role} #{@mailgroup.country}").present?
      # @mailgroup.users.delete_all
      # @mailgroup.type = mailgroup_params[:type]
      @mailgroup = @mailgroup.becomes!(Intmailgroup)
      logger.debug "UPDATE after becomes! mailgroup.type = #{@mailgroup.type}"
      # @mailgroup.query = @query
    else
      logger.debug "UPDATE else (query not present), mailgroup_params = #{mailgroup_params}"
      @mailgroup = @mailgroup.becomes!(Mailgroup)
    end
    respond_to do |format|
    if @mailgroup.update(mailgroup_params)
      format.html { redirect_to @mailgroup, notice: 'Mailgroup was successfully updated.' }
      format.json { render :show, status: :ok, location: @mailgroup }
    else
      format.html { render :edit }
      format.json { render json: @mailgroup.errors, status: :unprocessable_entity }
    end
    end

    # rescue ActiveRecord::StatementInvalid => error
    # respond_to do |format|
    #   format.html { render :edit, notice: 'Mailgroup was successfully updated.'  }
    #   format.json { render json: @mailgroup.errors, status: :unprocessable_entity }
    # end
    logger.debug "in mailgroups_controller, mailgroup_params= #{mailgroup_params}. \n update exit"

  end

  # DELETE /mailgroups/1
  # DELETE /mailgroups/1.json
  def destroy
    @mailgroup.destroy
    respond_to do |format|
      format.html { redirect_to mailgroups_url, notice: 'Mailgroup was successfully destroyed.' }
      format.json { head :no_content }
      format.js
    end
  end


  def append
    @user      = User.find(params[:user_id])
    @mailgroup = Mailgroup.find(params[:mailgroup_id])
    respond_to do |format|
      if @user.mailgroups.append(@mailgroup) # append: CollectionProxy method --> http://api.rubyonrails.org/classes/ActiveRecord/Associations/CollectionProxy.html#method-i-append
        format.html { redirect_to @mailgroup, notice: 'Mailgroup was successfully added to user.' }
        format.json { render :show, status: :created, location: @mailgroup }
        format.js
      else
        format.html { render :new }
        format.json { render json: @mailgroup.errors, status: :unprocessable_entity }
      end
    end
  end 

  # remove a USER from a mailgroup
  def remove
    # lets get the parameters from the url. we get them from the hash 'params'

    @user = User.find(params[:user_id])
    @user.mailgroups.delete(@mailgroup)

    respond_to do |format|
      format.html { redirect_to :back, notice: 'Mailgroup was successfully removed.' }  #reload this page after deletion
      format.json { head :no_content }
      format.js
    end
  end


  def remove_list
    # remove a mailgroup from list
    # lets get the parameters from the url. we get them from the hash 'params'
    @list = List.find(params[:list_id])
    @list.mailgroups.delete(@mailgroup)

    respond_to do |format|
      #format.html { redirect_to :back, notice: 'Mailgroup was successfully removed from list.' }  #reload this page after deletion
      #format.json { head :no_content }
      format.js
    end
  end



  def mailto
    respond_to do |format|
        format.js
    end
  end


  def print
    respond_to do |format|
        #format.html
        format.js
    end    
  end



  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  protected


      # Never trust parameters from the scary internet, only allow the white list through.
    def mailgroup_params
      if params["mailgroup"].present?
        params.require(:mailgroup).permit(:name, :memo, :trialcode, :query, :country, :role, :type)
      elsif params["intmailgroup"].present?
        params.require(:intmailgroup).permit(:name, :memo, :trialcode, :query, :country, :role, :type)
      else
        nil
      end
    end

  

  private


    # Use callbacks to share common setup or constraints between actions.
    def set_mailgroup
      @mailgroup = Mailgroup.find(params[:id])
    end

    def set_term
      @term = params[:term]
    end

    def set_sort
      @c = sort_column
      @d = sort_direction; @d ||= 'asc'
    end

end
