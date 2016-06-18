function checkLogin() {
  if (localStorage.getItem('token') === null) {
    $('#not-logged-in-message').show();
    $('#logged-in-message').hide();
  } else {
    $('#not-logged-in-message').hide();
    $('#logged-in-message').show();
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
    url: '/api/protected-resource',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  }).done(function(data) {
    console.log('RESPONSE: ' + data);
  });
}

function login(e) {
  e.preventDefault();
  $.get('/login').done(function(token) {
    console.log('Successfully logged in! The token is: ' + token + '. Saving it to localStorage for further use...');
    localStorage.setItem('token', token);
    checkLogin();
  });
}

function logout(e) {
  e.preventDefault();
  localStorage.removeItem('token');
  checkLogin();
}

$(function() {
  checkLogin();

  $('#login').click(login);
  $('#logout').click(logout);
  $('#get-open-resource').click(getOpenResource);
  $('#get-protected-resource').click(getProtectedResource);
});
