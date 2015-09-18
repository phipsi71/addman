# $('.checknumgroups').click ->
#   if $('<%= @mailgroup.users.count %>') > 50
#     $('#mailgroupwarn').modal()
#   else
#     $('<%= logger.debug "before else" %>')
#   	$('<% mail_to subject: "Your email", body: "Body text", bcc: @mailgroup.users.where("email is not null").map(&:email).join(", ") %>')
#   	$('<%= logger.debug "after  else"')
#   return false
#   true

$('#mailgroupwarn').modal()