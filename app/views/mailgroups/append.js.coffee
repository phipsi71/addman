$('table.users > tbody:last').append('<%= j render partial: "/users/user", locals: {user: @user} %>');
$('#<%= dom_id(@user) %>').effect('highlight', {}, 2000);
$('#autousers').val('');
