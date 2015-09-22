$ ->
  $('.loaderlink').click ->
    $('.loader').show()
    return
  return

$ ->
$('.loaderlink').bind 'ajax:complete', ->
  $('.loader').hide()
  return