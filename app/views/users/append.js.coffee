# $('table.mailgroups').append('<%= j render @mailgroup %>');

$('table.mailgroups').append('<%= j render partial: "mailgroups/mailgroup_append", locals: {mailgroup: @mailgroup} %>');
$('#<%= dom_id(@mailgroup) %>').effect('highlight', {}, 2000);
$('#autogroups').val('');