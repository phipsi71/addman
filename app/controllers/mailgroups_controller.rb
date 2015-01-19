class MailgroupsController < ApplicationController
  include UserMailgroup
  before_action :set_mailgroup, only: [:show, :edit, :update, :destroy]

  # GET /mailgroups
  # GET /mailgroups.json
  def index
    @mailgroups = Mailgroup.order(:id)
  end

  # GET /mailgroups/1
  # GET /mailgroups/1.json
  def show
  end

  # GET /mailgroups/new
  def new
    @mailgroup = Mailgroup.new
  end

  # GET /mailgroups/1/edit
  def edit
  end

  # POST /mailgroups
  # POST /mailgroups.json
  def create
    @mailgroup = Mailgroup.new(mailgroup_params)

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
    end
  end

  def choose
    @userid = params[:user_id]
    @mailgroups = Mailgroup.all
  end



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
