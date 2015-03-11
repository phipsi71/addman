# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


jQuery ->

 $('#autousers').autocomplete
    minLength: 3
    source: (request, response) ->
      $.ajax
        #url: 'http://gd.geobytes.com/AutoCompleteCity'
        url: '/users'
        dataType: 'json'
        data: term: request.term
        success: (data) ->
          #console.log(data)
          response $.map(data, (item) ->
            lastname  = if item.lastname  then item.lastname else ''
            firstname = if item.firstname then item.firstname else ''
            company   = if item.company   then ', ' + item.company else ''
            {
              label: lastname + ' ' + firstname + company
              id: item.id
            })
    select: (event, ui) ->
      #log "Now chosen: " + ui.item.label + " / " + ui.item.id
      $("#user_id").val(ui.item.id)  # set the css id 'user_id' with id of user
