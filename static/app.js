$(function() {
  console.log('Frontend running...');

  $('#get-auth-resource').click(function() {
    $.ajax({
      url: '/api/authorized-resource',
      headers: {
        Authorization: 'Bearer ' + $('#token').val()
      }
    }).done(function(data) {
      console.log('RESPONSE: ' + data);
    });

    $('#token').focus();
  });

  $('#get-open-resource').click(function() {
    $.ajax({
      url: '/api/open-resource'
    }).done(function(data) {
      console.log('RESPONSE: ' + data);
    });
  });

  $('#token').focus();
});
