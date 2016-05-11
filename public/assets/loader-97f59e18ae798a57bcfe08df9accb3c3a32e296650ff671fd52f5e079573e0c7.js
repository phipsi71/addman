(function() {
  $(function() {
    $('.loaderlink').click(function() {
      $('.loader').show();
    });
  });

  $(function() {});

  $('.loaderlink').bind('ajax:complete', function() {
    $('.loader').hide();
  });

}).call(this);
