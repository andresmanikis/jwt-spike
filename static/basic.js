$(function() {
  var VALID_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UifQ.xuEv8qrfXu424LZk8bVgr9MQJUIrp1rHcPyZw_KSsds';

  $('#get-auth-resource').click(function() {
    $.ajax({
      url: '/api/authorized-resource',
      headers: {
        Authorization: 'Bearer ' + $('#token').val()
      }
    }).done(function(data) {
      console.log('RESPONSE: ' + data);
    });
  });

  $('#get-open-resource').click(function() {
    $.ajax({
      url: '/api/open-resource'
    }).done(function(data) {
      console.log('RESPONSE: ' + data);
    });
  });

  $('#valid-token').click(function(e) {
    e.preventDefault();
    $('#token').val(VALID_TOKEN)
  });

  console.log('Frontend running...');
});
