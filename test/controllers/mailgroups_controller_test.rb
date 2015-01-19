require 'test_helper'

class MailgroupsControllerTest < ActionController::TestCase
  setup do
    @mailgroup = mailgroups(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:mailgroups)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create mailgroup" do
    assert_difference('Mailgroup.count') do
      post :create, mailgroup: { created_at: @mailgroup.created_at, created_by: @mailgroup.created_by, groupid: @mailgroup.groupid, importance: @mailgroup.importance, memo: @mailgroup.memo, name: @mailgroup.name, trialcode: @mailgroup.trialcode, updated_at: @mailgroup.updated_at, updated_by: @mailgroup.updated_by }
    end

    assert_redirected_to mailgroup_path(assigns(:mailgroup))
  end

  test "should show mailgroup" do
    get :show, id: @mailgroup
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @mailgroup
    assert_response :success
  end

  test "should update mailgroup" do
    patch :update, id: @mailgroup, mailgroup: { created_at: @mailgroup.created_at, created_by: @mailgroup.created_by, groupid: @mailgroup.groupid, importance: @mailgroup.importance, memo: @mailgroup.memo, name: @mailgroup.name, trialcode: @mailgroup.trialcode, updated_at: @mailgroup.updated_at, updated_by: @mailgroup.updated_by }
    assert_redirected_to mailgroup_path(assigns(:mailgroup))
  end

  test "should destroy mailgroup" do
    assert_difference('Mailgroup.count', -1) do
      delete :destroy, id: @mailgroup
    end

    assert_redirected_to mailgroups_path
  end
end
