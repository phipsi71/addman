# $ ->
# 	$("#jqcc").click ->
# 	  alert ("gugus")
# 	return

$ ->
	$("#jqcc").click ->
		emails = []
		$('tr td:has(input:checkbox:checked) ~ td > a[href^="mailto"]').each ->
		  $this = $(this)
		  email = $this.attr('href').replace('mailto:', '')
		  emails.push email
		  return
		if emails.length > 50
			$('#mailgroupwarn').modal 'show'
		else
			window.location.href = "mailto:?bcc=" + emails.join(';')
		return


# check / uncheck all
$ ->
	$('#select_all').click ->
  $('input[id^="user_"]').prop 'checked', @checked
  return