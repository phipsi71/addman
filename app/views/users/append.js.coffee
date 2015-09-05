$('table.mailgroups > tbody:last').append('<%= j render partial: "mailgroups/mailgroup_append", locals: {mailgroup: @mailgroup} %>');
$('#<%= dom_id(@mailgroup) %>').effect('highlight', {}, 1200); # .addClass('in'); #
$('#autogroups').val('');