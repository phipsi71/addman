
$ ->
	$("#jqcc").click ->
		emails = []
		$('tr td:has(input:checkbox:checked) ~ td > a[href^="mailto"]').each ->
		  $this = $(this)
		  email = $this.attr('href').replace('mailto:', '')
		  emails.push email
		if emails.length > 200
			$('#mailgroupwarn').modal 'show'
		else
			textBox = $('#modal-results')
			textBox.text emails.join(';\n')
			$('#mailgroupmails').modal 'show'



# check / uncheck all
$ ->
	$('#select_all').click ->
  $('input[id^="user_"]').prop 'checked', @checked
  return

# $ ->
# 	textBox.onfocus = ->
# 	  textBox.select()
# 	  # Work around Chrome's little problem
# 	  textBox.onmouseup = ->
# 	    # Prevent further mouseup intervention
# 	    textBox.onmouseup = null
# 	    false

# 	  return


# $ ->
# 	$('#c2c').click ->
# 		$(this).select('#modal-results')


# copyToClipboard = (element) ->
#   $temp = $('<input>')
#   $('body').append $temp
#   $temp.val($(element).text()).select()
#   document.execCommand 'copy'
#   $temp.remove()
#   return