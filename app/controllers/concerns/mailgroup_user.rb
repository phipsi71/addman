module MailgroupUser

  # Delete a mailgroup from association
  #
  # DELETE /users/28/mailgroups/1
  # DELETE /users/28/mailgroups/1.json
  # call in console: u.mailgroups.delete(554)
  #
  # in log:
  # Started PUT "/users/440/mailgroups/631/delete" for 10.20.14.2 at 2014-11-08 17:19:02 +0100
  # Processing by MailgroupsController#delete as HTML
  # Parameters: {..., "user_id"=>"440", "id"=>"631"}
  #
  def delete
    # lets get the parameters from the url. we get them from the hash 'params'
    mailgroup = Mailgroup.find(params[:mailgroup_id])
    user      = User.find(params[:id])

    #user.mailgroups.delete(mailgroup)
    mailgroup.users.delete(user)

    respond_to do |format|
      #format.html { redirect_to users_url, notice: 'Mailgroup was successfully removed.' }
      format.html { redirect_to :back, notice: 'User was successfully removed.' }  #reload this page after deletion
      #format.html { redirect_to user_path(params[:user_id]), notice: 'Mailgroup was successfully removed.' }  #reload this page after deletion
      format.json { head :no_content }
    end
  end

  #  mailgroup_append PATCH  /mailgroups/:mailgroup_id/append_to/:user_id(.:format) mailgroups#append_to
  def append_to
    user      = User.find(params[:user_id])
    mailgroup = Mailgroup.find(params[:mailgroup_id])

    respond_to do |format|
    #  if user.mailgroups.append(mailgroup)
      if mailgroup.users.append(user)
        format.html { redirect_to mailgroup, notice: 'Mailgroup was successfully added.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mailgroupuser

    end

end
