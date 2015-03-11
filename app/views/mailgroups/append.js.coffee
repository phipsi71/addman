$('table.users').append('<%= j render partial: "/users/user_append", locals: {user: @user} %>');
$('#<%= dom_id(@user) %>').effect('highlight', {}, 2000);
$('#autousers').val('');
