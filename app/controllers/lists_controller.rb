class ListsController < ApplicationController
  require 'application_helper'
  before_action :authenticate, except: [:index, :show, :choose]
  before_action :set_list, only: [:show, :edit, :update, :destroy]

  # GET /lists
  # GET /lists.json
  def index
    @lists = List.regular
    @intlists = Intlist.all
    
    if $LOGINNAME
      @carboncopy="cc=#{$LOGINNAME}&"
    end
  end

  # GET /lists/1
  # GET /lists/1.json
  def show
    logger.debug "@lc = #{@lc}"
    if $LOGINNAME
      @carboncopy="cc=#{$LOGINNAME}&"
    end
    list_count
  end

  # GET /lists/new
  def new
    @list = List.new
    @list.admin = current_user.login
  end



  # GET /lists/1/edit
  def edit
    unless list_admin?(@list)
      redirect_to @list, alert: 'You are not the list admin.'
    end
  end

  # POST /lists
  # POST /lists.json
  def create
    @list = List.new(list_params)

    respond_to do |format|
      if @list.save
        format.html { redirect_to @list, notice: 'List was successfully created.' }
        format.json { render :show, status: :created, location: @list }
      else
        format.html { render :new }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lists/1
  # PATCH/PUT /lists/1.json
  def update
    @query = get_query(params) # helpers/application_helper.rb
    logger.debug "in def update, query=#{@query}"
    if @query.present?
      @list = @list.becomes!(Intlist)
      @list.query = @query
    else
      @list = @list.becomes!(List)
    end
    respond_to do |format|
      if @list.update(list_params)
        format.html { redirect_to @list, notice: 'List was successfully updated.' }
        format.json { render :show, status: :ok, location: @list }
      else
        format.html { render :edit }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lists/1
  # DELETE /lists/1.json
  def destroy
    @list.destroy
    respond_to do |format|
      format.html { redirect_to lists_url, notice: 'List was successfully destroyed.' }
      format.json { head :no_content }
      format.js
    end
  end

  def choose
    @userid = params[:user_id]
    @lists = List.all
  end


  # append a MAILGROUP to a LIST
  def append
    @mailgroup = Mailgroup.find(params[:mailgroup_id])  # this param comes from hidden tag, not from url!
    @list = List.find(params[:list_id])
    respond_to do |format|
      if @mailgroup.lists.append(@list)   # this is a collection-proxy method  ::  http://api.rubyonrails.org/classes/ActiveRecord/Associations/CollectionProxy.html#method-i-append
        format.html { redirect_to @list, notice: 'Mailgroup was successfully added.' }
        format.json { render :show, status: :created, location: @list }
        format.js
      else
        format.html { render :new }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def own
    @lists = List.own
    @intlists = Intlist.own
    # respond_to do |format|
    #   format.json
    # end
    render :index
  end


  def sync_list
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def list_params
      if params.has_key? :intlist
        params[:list] = params.delete :intlist
      end
      params.require(:list).permit(:name, :email_id, :memo, :admin, :query)
    end


    def list_count
      @lc = 0
      logger.debug ("in controller list, query = #{@list.query}")
      @list.mailgroups.each do |m|
        @lc += m.users.count(:id)
      end
    end


end

