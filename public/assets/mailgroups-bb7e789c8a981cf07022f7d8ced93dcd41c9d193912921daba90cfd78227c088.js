(function() {
  jQuery(function() {
    $('#autogroups').autocomplete({
      minLength: 3,
      source: function(request, response) {
        return $.ajax({
          url: '../mailgroups',
          dataType: 'json',
          data: {
            term: request.term
          },
          success: function(data) {
            return response($.map(data, function(item) {
              return {
                label: item.name,
                id: item.id
              };
            }));
          }
        });
      },
      select: function(event, ui) {
        return $("#mailgroup_id").val(ui.item.id);
      }
    });
  });

  return;

}).call(this);
