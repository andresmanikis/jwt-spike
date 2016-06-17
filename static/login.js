function checkLogin() {
  if (localStorage.getItem('token') === null) {
    $('#not-logged-in-message').show();
  } else {
    $('#not-logged-in-message').hide();
  }
}

function getOpenResource() {
  $.ajax({
    url: '/api/open-resource'
  }).done(function(data) {
    console.log('RESPONSE: ' + data);
  });
}

function getProtectedResource() {
  $.ajax({
    url: '/api/authorized-resource',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  }).done(function(data) {
    console.log('RESPONSE: ' + data);
  });
}

function login(e) {
  e.preventDefault();
}

$(function() {
  checkLogin();

  $('#login').click(login);
  $('#get-open-resource').click(getOpenResource);
  $('#get-protected-resource').click(getProtectedResource);
});
