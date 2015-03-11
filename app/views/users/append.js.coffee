$('table.mailgroups').append('<%= j render @mailgroup %>');
$('#<%= dom_id(@mailgroup) %>').effect('highlight', {}, 2000);
$('#autogroups').val('');