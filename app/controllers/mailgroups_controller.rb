class MailgroupsController < ApplicationController
  #caches_page   :index
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
    @mailgroups    = Mailgroup.searched(@term).order(@c + ' ' + @d).paginate(page: params[:page])
    #@mailgroups    = Mailgroup.regular
    @intmailgroups = Intmailgroup.all
    #respond_with (@mailgroups)
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
    @mailgroup = Mailgroup.new(mailgroup_params)
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
    @mailgroup.updated_by = current_user.login
    @mailgroup.updated_at = Time.now        
    respond_to do |format|
      if @mailgroup.update(mailgroup_params)
        format.html { redirect_to @mailgroup, notice: 'Mailgroup was successfully updated.' }
        format.json { render :show, status: :ok, location: @mailgroup }
      else
        format.html { render :edit }
        format.json { render json: @mailgroup.errors, status: :unprocessable_entity }
      end
    end
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


    # Never trust parameters from the scary internet, only allow the white list through.
    def mailgroup_params
      params.require(:mailgroup).permit(:name, :memo, :trialcode, :query, :type)
    end


end
