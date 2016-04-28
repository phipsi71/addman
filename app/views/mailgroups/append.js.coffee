$('table.users > tbody:last').append('<%= j render partial: "/users/user", locals: {user: @user, show_check: true} %>');
$('#<%= dom_id(@user) %>').effect('highlight', {}, 2000);
$('#autousers').val('');
