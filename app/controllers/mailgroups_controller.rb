class MailgroupsController < ApplicationController
  before_action :authenticate, except: [:index, :search_for, :show, :search, :mailto, :print]
  before_action :set_mailgroup, only:  [:show, :edit, :update, :destroy, :mailto, :print, :remove]

  #include MailgroupsHelper

  respond_to :html, :json, :js

  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  # GET /mailgroups
  # GET /mailgroups.json
  def index
    if params[:term]
      @mailgroups = Mailgroup.where("name ILIKE ?", "%#{params[:term]}%").first(10)
      #@users = SearchIndex.search_for(params[:term])
    else
      @mailgroups = Mailgroup.order(:name).paginate(page: params[:page])
      #@users = User.order(:lastname).paginate(page: params[:page])
    end

    # respond_to do |format|
    #     format.html # will call index.html.erb
    #     format.json { render json: @mailgroups}
    #     format.js   # will call index.js.coffee
    # end   
    respond_with (@mailgroups)
  end


  def search_for
    term = params[:term]
    logger.debug("url parameters: #{term}")
    @mailgroups = Mailgroup.where("name ILIKE ?", "%#{params[:term]}%").paginate(:page => params[:page])
  end

  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  # GET /mailgroups/1
  # GET /mailgroups/1.json
  def show
  end

  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  # GET /mailgroups/new
  def new
    @mailgroup = Mailgroup.new
    @mailgroup.created_by = current_user.login
    @mailgroup.created_at = Time.now    
  end

  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  # GET /mailgroups/1/edit
  def edit
    # @mailgroup.created_by = current_user.login
    # @mailgroup.created_at = Time.now    
  end

  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
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

  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
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

  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
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


  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
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




  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  def remove
    # lets get the parameters from the url. we get them from the hash 'params'

    @user      = User.find(params[:user_id])
    @user.mailgroups.delete(@mailgroup)

    respond_to do |format|
      format.html { redirect_to :back, notice: 'Mailgroup was successfully removed.' }  #reload this page after deletion
      format.json { head :no_content }
      format.js
    end


  end


  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  def remove_list
    # remove a mailgroup from list
    # lets get the parameters from the url. we get them from the hash 'params'
    @list = List.find(params[:list_id])
    @list.mailgroups.delete(@mailgroup)

    respond_to do |format|
      format.html { redirect_to :back, notice: 'Mailgroup was successfully removed from list.' }  #reload this page after deletion
      format.json { head :no_content }
      format.js
    end
  end



  # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  def search
    like_keyword = "%#{params[:term]}%"    
    @mgs = Mailgroup.where("name LIKE ?", like_keyword)
    respond_to do |format|
      format.json { render json: @mgs.to_json }
      format.html
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



    # Never trust parameters from the scary internet, only allow the white list through.
    def mailgroup_params
      params.require(:mailgroup).permit(:name, :memo, :trialcode, :importance)
    end
end
