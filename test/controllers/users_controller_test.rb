require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:users)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post :create, user: { Appendix: @user.Appendix, City: @user.City, Company: @user.Company, Country: @user.Country, Data: @user.Data, Email2: @user.Email2, Email: @user.Email, Fax: @user.Fax, Firstname: @user.Firstname, Function: @user.Function, Gender: @user.Gender, Initials: @user.Initials, Language: @user.Language, Lastname: @user.Lastname, Memo: @user.Memo, Phone2: @user.Phone2, Phone: @user.Phone, Prio: @user.Prio, Street: @user.Street, Title: @user.Title, UserId: @user.UserId, ZIP: @user.ZIP, created_by: @user.created_by, updated_by: @user.updated_by }
    end

    assert_redirected_to user_path(assigns(:user))
  end

  test "should show user" do
    get :show, id: @user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @user
    assert_response :success
  end

  test "should update user" do
    patch :update, id: @user, user: { Appendix: @user.Appendix, City: @user.City, Company: @user.Company, Country: @user.Country, Data: @user.Data, Email2: @user.Email2, Email: @user.Email, Fax: @user.Fax, Firstname: @user.Firstname, Function: @user.Function, Gender: @user.Gender, Initials: @user.Initials, Language: @user.Language, Lastname: @user.Lastname, Memo: @user.Memo, Phone2: @user.Phone2, Phone: @user.Phone, Prio: @user.Prio, Street: @user.Street, Title: @user.Title, UserId: @user.UserId, ZIP: @user.ZIP, created_by: @user.created_by, updated_by: @user.updated_by }
    assert_redirected_to user_path(assigns(:user))
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete :destroy, id: @user
    end

    assert_redirected_to users_path
  end
end
