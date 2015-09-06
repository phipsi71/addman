# $('table.mailgroups').append('<%= j render @mailgroup %>');

$('table.mailgroups > tbody:last').append('<%= j render partial: "mailgroups/mailgroup_append_list", locals: {mailgroup: @mailgroup} %>');
$('#<%= dom_id(@mailgroup) %>').effect('highlight', {}, 2000);
$('#autogroups').val('');