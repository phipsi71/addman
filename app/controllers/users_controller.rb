class UsersController < ApplicationController
  #include UsersHelper
  before_action :set_user, only: [:show, :edit, :update, :destroy, :print, :remove]
  before_action :authenticate, only: [:new, :edit, :create]



  # GET /users
  # GET /users.json
  def index
    #@users = User.all
    #@users = User.first(50)

    if params[:term]
      @users = User.where("lastname ILIKE ? or company ILIKE ?", 
                          "#{params[:term]}%", "#{params[:term]}%").first(10)  #.map{ |i| i.lastname+' '+i.firstname }
    else
      @users = User.order(:lastname).paginate(page: params[:page])
    end

    respond_to do |format|
        format.html # will call index.html.erb
        format.json { render json: @users}
        format.js   # will call index.js.coffee
    end
  end


  # def print
  #   @uattr = @user.attributes
  #   logger.debug("in print : before file open")
  #   File.open('/home/philippb/tmp/addman/label.txt','w') do |f1|
  #     f1.puts @uattr['salutation'].to_s + ' ' + @uattr['title'].to_s
  #     f1.puts @uattr['firstname'].to_s + ' ' + @uattr['lastname'].to_s
  #     f1.puts @uattr['company'].to_s
  #     f1.puts @uattr['appendix'].to_s
  #     f1.puts @uattr['street'].to_s
  #     f1.puts @uattr['zip'].to_s + ' ' + @uattr['city'].to_s
  #     f1.print "\f"  # form feed
  #     f1.close
  #   end

  #   #system("smbclient //sakkdc2008r2/BW-Color-2 -c 'print label.test'")
  # end


  def search_for
    term = params[:term]
    logger.debug("url parameters: #{term}")
    @users = SearchIndex.search_for(term).paginate(:page => params[:page])
  end


  # GET /users/1
  # GET /users/1.json
  def show
    respond_to do |format|
      format.html
      format.json { render json: @user }
    end
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
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


    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:salutation, :title, :firstname,
        :lastname, :function, :company, :appendix, :street, :city, :zip,
        :country, :fax, :phone, :phone2, :email, :email2, :gender, :initials, :language, :memo, :prio)
      #params.require(:user).permit(:Firstname)
    end
end
