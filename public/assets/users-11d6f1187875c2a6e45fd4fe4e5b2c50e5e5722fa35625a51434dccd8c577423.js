(function() {
  jQuery(function() {
    $('#autousers').autocomplete({
      minLength: 3,
      source: function(request, response) {
        return $.ajax({
          url: '../users',
          dataType: 'json',
          data: {
            term: request.term
          },
          success: function(data) {
            return response($.map(data, function(item) {
              var company, firstname, lastname;
              lastname = item.lastname ? item.lastname : '';
              firstname = item.firstname ? item.firstname : '';
              company = item.company ? ', ' + item.company : '';
              return {
                label: lastname + ' ' + firstname + company,
                id: item.id
              };
            }));
          }
        });
      },
      select: function(event, ui) {
        return $("#user_id").val(ui.item.id);
      }
    });
  });

}).call(this);
