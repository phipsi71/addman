# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http:#coffeescript.org/

jQuery ->
  $('#autogroups').autocomplete
    minLength: 3
    source: (request, response) ->
      $.ajax
        url: '../mailgroups'
        dataType: 'json'
        data: term: request.term
        success: (data) ->
          #console.log(data)
          response $.map(data, (item) ->
            {
              label: item.name
              id: item.id
            })
    select: (event, ui) ->
      #log "Now chosen: " + ui.item.label + " / " + ui.item.id
      $("#mailgroup_id").val(ui.item.id)  # set the css id 'user_id' with id of user in hidden_field in html
  return



  # log = (message) ->
  #   $('<div>').text(message).prependTo '#log'
  #   $('#log').scrollTop 0
  #   return