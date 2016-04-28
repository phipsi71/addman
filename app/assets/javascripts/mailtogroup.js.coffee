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
		#$('#maila').val emails.join(';')
		window.location.href = "mailto:?bcc=" + emails.join(';')


# check / uncheck all
$ ->
	$('#select_all').click ->
  $('input[id^="user_"]').prop 'checked', @checked
  return