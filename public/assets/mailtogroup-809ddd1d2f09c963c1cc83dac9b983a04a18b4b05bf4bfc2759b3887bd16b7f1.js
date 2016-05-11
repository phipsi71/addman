(function() {
  $(function() {
    return $("#jqcc").click(function() {
      var emails;
      emails = [];
      $('tr td:has(input:checkbox:checked) ~ td > a[href^="mailto"]').each(function() {
        var $this, email;
        $this = $(this);
        email = $this.attr('href').replace('mailto:', '');
        emails.push(email);
      });
      return window.location.href = "mailto:?bcc=" + emails.join(';');
    });
  });

  $(function() {
    return $('#select_all').click(function() {
      $('input[id^="user_"]').prop('checked', this.checked);
    });
  });

}).call(this);
