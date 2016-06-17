$(function() {
  console.log('Frontend running...');

  $('#get-with-auth-header').click(function() {
    $.ajax({
      url: '/api/authorized-resource',
      headers: {
        Authorization: 'Bearer <token>'
      }
    }).done(function(data) {
      console.log('RESPONSE: ' + data);
    });
  });
});
