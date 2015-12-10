class UsersController < ApplicationController
  #include UsersHelper
  before_action :authenticate, except: [:index, :search_for, :show, :sample, :print]
  before_action :set_user, only: [:show, :edit, :copy, :update, :destroy, :print, :remove]
  before_action :set_term, only: [:index]
  before_action :set_sort, only: [:index, :show]

  helper_method :sort_column, :sort_direction

  # GET /users
  # GET /users.json
  # GET /users
  # GET /users.json
  def index
    # @users = User.order(sort_column).order(sort_direction).paginate(page: params[:page])
    # this is also used for searches !!!!
    @c ||= "lastname"

    if @term.present?
      @users = User.searched(@term).order(@c + ' ' + @d).paginate(page: params[:page])
    else 
      @users = User.order(@c + ' ' + @d).paginate(page: params[:page])
    end

    respond_to do |format|
        format.html # will call index.html.erb
        format.json { render json: @users }
        format.js   # will call index.js.coffee
    end
  end


  # GET /users/1
  # GET /users/1.json
  def show
    @c ||= "name"

    # if @term.present?
    #   @users = User.searched(@term).order(@c + ' ' + @d).paginate(page: params[:page])
    # else 
    #   @users = User.order(@c + ' ' + @d).paginate(page: params[:page])
    # end
    
    respond_to do |format|
      format.html
      format.json { render json: @user }
    end
  end

  # GET /users/new
  def new
    @user = User.new
    @user.created_by = current_user.login
    @user.created_at = Time.now
  end


  def copy
    new_user = @user.dup
    new_user.salutation = nil
    new_user.title = nil
    new_user.lastname = nil
    new_user.firstname = nil
    new_user.email = nil
    new_user.gender = nil
    new_user.created_by = current_user.login
    new_user.created_at = Time.now
    @user = new_user
    render :edit
  end


  # GET /users/1/edit
  def edit
    #params.require(:user).permit(:updated_by, :updated_at)
    # @user.updated_by = current_user.login
    # @user.updated_at = Time.now  
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    # params.require(:user).permit(:salutation, :title, :firstname,
    #     :lastname, :function, :company, :appendix, :street, :city, :zip,
    #     :country, :fax, :phone, :phone2, :email, :email2, :gender, :initials, :language, :memo, :prio,
    #     :updated_by, :updated_at)
    @user.updated_by = current_user.login
    @user.updated_at = Time.now
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end



  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
      format.js
    end
  end

  def sample
    allids = User.pluck(:id)
    @user  = User.find(allids.sample)
    respond_to do |format|
      format.html { redirect_to(@user)  } 
      format.json { render json: @user }
    end
  end

  def print
    respond_to do |format|
      format.js
    end
  end


  # append a MAILGROUP to a user
  def append
    @mailgroup = Mailgroup.find(params[:mailgroup_id])  # this param comes from hidden tag, not from url!
    @user = User.find(params[:user_id])
    respond_to do |format|
      if @mailgroup.users.append(@user)   # this is a collection-proxy method  ::  http://api.rubyonrails.org/classes/ActiveRecord/Associations/CollectionProxy.html#method-i-append
        format.html { redirect_to @user, notice: 'Mailgroup was successfully added.' }
        format.json { render :show, status: :created, location: @user }
        format.js
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end


  # remove a MAILGROUP from a user
  def remove
    @mailgroup = Mailgroup.find(params[:mailgroup_id])  # this param comes from hidden tag, not from url!
    @user = User.find(params[:id])
    @mailgroup.users.delete(@user)
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully removed from mailgroup.' }
      format.json { head :no_content }
      format.js
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.


    def set_user
      @user = User.find(params[:id])
    end


    def set_term
      @term = params[:term]
    end


    def set_sort
      @c = sort_column
      @d = sort_direction
    end



    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:salutation, :title, :firstname,
        :lastname, :function, :company, :appendix, :street, :city, :zip,
        :country, :fax, :phone, :phone2, :email, :email2, :gender, :initials, :language, :memo, :prio)
    end


end
